
export interface Retreat {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    price: number;
    type: "Signature" | "Standalone";
    condition: string;
    image: string;
    duration: number;
    tag: Array<string>
}