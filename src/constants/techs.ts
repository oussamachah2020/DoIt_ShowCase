import ReactIcon from "@/assets/dark_mode_icons/react-native.svg"
import ExpoIcon from "@/assets/dark_mode_icons/expo.svg";
import SupabaseIcon from "@/assets/dark_mode_icons/supabase.svg"
import ZustandIcon from "@/assets/dark_mode_icons/zustand.png"

type Techs = {
    id: number;
    label: string;
    icon: string | undefined
}

export const techs = [
    {
        id: 1,
        label: "React Native",
        icon: ReactIcon
    },
    {
        id: 2,
        label: "Expo",
        icon: ExpoIcon
    },
    {
        id: 3,
        label: "Supabase",
        icon: SupabaseIcon
    },
    {
        id: 4,
        label: "Zustand",
        icon: ZustandIcon
    }
]