"use client";

import NextLink from "next/link";
import {
  useParams as useNextParams,
  usePathname,
  useRouter,
} from "next/navigation";
import {
  forwardRef,
  useCallback,
  useMemo,
  useSyncExternalStore,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

function subscribeToUrl(cb: () => void) {
  window.addEventListener("popstate", cb);
  return () => window.removeEventListener("popstate", cb);
}

/** Stable string snapshots — URLSearchParams objects break useSyncExternalStore caching. */
function getClientSearch() {
  return window.location.search;
}

function getServerSearch() {
  return "";
}

function parseSearch(search: string): URLSearchParams {
  const query = search.startsWith("?") ? search.slice(1) : search;
  return new URLSearchParams(query);
}

type NavigateOptions = { replace?: boolean; state?: unknown };

type To = string | { pathname?: string; search?: string; hash?: string };

function resolveTo(to: To): string {
  if (typeof to === "string") return to;
  const pathname = to.pathname ?? "";
  const search = to.search ?? "";
  const hash = to.hash ?? "";
  return `${pathname}${search}${hash}`;
}

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to?: To;
  href?: To;
  replace?: boolean;
  children?: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, href, replace, children, ...rest },
  ref,
) {
  const destination = resolveTo(to ?? href ?? "/");
  return (
    <NextLink href={destination} replace={replace} ref={ref} {...rest}>
      {children}
    </NextLink>
  );
});

export function useNavigate() {
  const router = useRouter();

  return useCallback(
    (to: To | number, options?: NavigateOptions) => {
      if (typeof to === "number") {
        window.history.go(to);
        return;
      }
      const path = resolveTo(to);
      if (options?.replace) {
        router.replace(path);
      } else {
        router.push(path);
      }
    },
    [router],
  );
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string>>() {
  const params = useNextParams();
  return params as T;
}

export function useLocation() {
  const pathname = usePathname() ?? "/";
  const search = useSyncExternalStore(subscribeToUrl, getClientSearch, getServerSearch);

  return useMemo(
    () => ({
      pathname,
      search,
      hash: typeof window !== "undefined" ? window.location.hash : "",
      state: null as unknown,
      key: "default",
    }),
    [pathname, search],
  );
}

export function useSearchParams(): [URLSearchParams, (next: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams)) => void] {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const search = useSyncExternalStore(subscribeToUrl, getClientSearch, getServerSearch);
  const params = useMemo(() => parseSearch(search), [search]);

  const setSearchParams = useCallback(
    (next: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams)) => {
      const resolved = typeof next === "function" ? next(params) : next;
      const query = resolved.toString();
      router.push(query ? `${pathname}?${query}` : pathname);
    },
    [params, pathname, router],
  );

  return [params, setSearchParams];
}

export interface NavLinkProps extends Omit<LinkProps, "className"> {
  className?: string | ((props: { isActive: boolean }) => string);
  end?: boolean;
}

export function NavLink({ to, href, className, end, children, ...rest }: NavLinkProps) {
  const location = useLocation();
  const destination = resolveTo(to ?? href ?? "/");
  const isActive = end
    ? location.pathname === destination
    : location.pathname === destination || location.pathname.startsWith(`${destination}/`);
  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  return (
    <Link to={destination} className={resolvedClassName} aria-current={isActive ? "page" : undefined} {...rest}>
      {children}
    </Link>
  );
}

export function Navigate({ to, replace }: { to: To; replace?: boolean }) {
  const router = useRouter();
  const path = resolveTo(to);
  if (typeof window !== "undefined") {
    if (replace) router.replace(path);
    else router.push(path);
  }
  return null;
}

/** Stubs — App Router owns routing in Next builds. */
export function Routes({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export function Route() {
  return null;
}

export function BrowserRouter({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
