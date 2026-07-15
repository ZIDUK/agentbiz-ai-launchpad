import { authClient } from "@/lib/auth-client";

type SessionUser = {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
};

export type AuthUser = SessionUser & {
  user_metadata?: {
    avatar_url?: string | null;
    full_name?: string | null;
  };
};

function mapUser(user: SessionUser | undefined | null): AuthUser | null {
  if (!user) return null;
  return {
    ...user,
    user_metadata: {
      avatar_url: user.image,
      full_name: user.name,
    },
  };
}

export const useAuth = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = mapUser(session?.user);

  const loginWithEmail = async (email: string, password: string) => {
    const { data, error } = await authClient.signIn.email({ email, password });
    if (error) throw error;
    return mapUser(data?.user);
  };

  const signUpWithEmail = async (email: string, password: string) => {
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name: email.split("@")[0] || "User",
    });
    if (error) throw error;
    return mapUser(data?.user);
  };

  const logout = async () => {
    const { error } = await authClient.signOut();
    if (error) throw error;
  };

  return {
    user,
    loading: isPending,
    loginWithEmail,
    signUpWithEmail,
    logout,
    isAuthenticated: !!user,
  };
};
