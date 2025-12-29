export interface Game {
    id: string;
    title: string;
    platform: string;
    region: string;
    image: string;
    originalPrice: number;
    discountPercentage: number;
    currentPrice: number;
    cashback: number;
    favorites: number;
    hasCashback: boolean;
    platformIcon: string;
}
