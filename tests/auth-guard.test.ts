import { beforeEach, describe, expect, it, vi } from "vitest";

const mockGetSession = vi.fn();
const mockHeaders = vi.fn();

vi.mock("next/headers", () => ({
  headers: () => mockHeaders(),
}));

vi.mock("@/lib/auth", () => ({
  auth: {
    api: {
      getSession: (...args: unknown[]) => mockGetSession(...args),
    },
  },
}));

describe("getAdminSessionOr401", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockHeaders.mockResolvedValue(new Headers());
  });

  it("returns 401 when no session", async () => {
    mockGetSession.mockResolvedValue(null);
    const { getAdminSessionOr401 } = await import("@/lib/auth-guard");

    const result = await getAdminSessionOr401();

    expect(result.error).toBeDefined();
    expect(result.session).toBeUndefined();
    expect(result.error?.status).toBe(401);
    await expect(result.error?.json()).resolves.toEqual({ error: "Unauthorized" });
  });

  it("returns session when authenticated", async () => {
    const session = {
      session: { id: "sess-1", userId: "user-1" },
      user: { id: "user-1", email: "admin@agentbiz.io", name: "Admin" },
    };
    mockGetSession.mockResolvedValue(session);
    const { getAdminSessionOr401 } = await import("@/lib/auth-guard");

    const result = await getAdminSessionOr401();

    expect(result.error).toBeUndefined();
    expect(result.session).toEqual(session);
    expect(mockGetSession).toHaveBeenCalledWith({ headers: expect.any(Headers) });
  });
});

describe("requireAdminSession", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockHeaders.mockResolvedValue(new Headers());
  });

  it("throws 401 Response when no session", async () => {
    mockGetSession.mockResolvedValue(null);
    const { requireAdminSession } = await import("@/lib/auth-guard");

    await expect(requireAdminSession()).rejects.toMatchObject({ status: 401 });
  });

  it("returns session when authenticated", async () => {
    const session = {
      session: { id: "sess-1", userId: "user-1" },
      user: { id: "user-1", email: "admin@agentbiz.io", name: "Admin" },
    };
    mockGetSession.mockResolvedValue(session);
    const { requireAdminSession } = await import("@/lib/auth-guard");

    await expect(requireAdminSession()).resolves.toEqual(session);
  });
});
