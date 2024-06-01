import { useRouter } from "next/navigation";

export function useRedirect(route: string) {
  const router = useRouter();

  const handleRedirectClick = () => {
    router.push(route);
  };

  return { handleRedirectClick };
}
