import ReactIcon from "@/assets/dark_mode_icons/react-native.svg"
import ExpoIcon from "@/assets/dark_mode_icons/expo.svg";
import SupabaseIcon from "@/assets/dark_mode_icons/supabase.svg"
import ZustandIcon from "@/assets/dark_mode_icons/zustand.webp";

type Techs = {
  id: number;
  label: string;
  icon: string | undefined;
  link: string;
};

export const techs: Techs[] = [
  {
    id: 1,
    label: "React Native",
    icon: ReactIcon,
    link: "https://reactnative.dev/",
  },
  {
    id: 2,
    label: "Expo",
    icon: ExpoIcon,
    link: "https://docs.expo.dev/",
  },
  {
    id: 3,
    label: "Supabase",
    icon: SupabaseIcon,
    link: "https://supabase.com/docs",
  },
  {
    id: 4,
    label: "Zustand",
    icon: ZustandIcon,
    link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
];