import FirstFeature from "@/assets/screen1.svg"
import SecondFeature from "@/assets/screen2.svg"

type Features = {
    id: number;
    title: string;
    description: string
    image: string | undefined
}

export const features: Features[] = [
    {
        id: 1,
        title: "Manage Tasks",
        description: "User friendly interface that allow to control your tasks easily",
        image: FirstFeature
    },
    {
        id: 2,
        title: "Schedule",
        description: "Agenda to schedule your work and stay 100% organized and in time",
        image: SecondFeature
    }
]