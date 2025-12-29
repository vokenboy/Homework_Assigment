export const calculateDiscountedPrice = (originalPrice: number, discountPercentage: number) => {
    const discountMultiplier = 1 - discountPercentage / 100;
    const currentPrice = originalPrice * discountMultiplier;
    return Math.round(currentPrice * 100) / 100;
};

export const calculateDiscountAmount = (originalPrice: number, discountPercentage: number) => {
    const discountAmount = originalPrice * (Math.abs(discountPercentage) / 100);
    return Math.round(discountAmount * 100) / 100;
};

export const calculateDiscountPercentage = (originalPrice: number, currentPrice: number) => {
    if (originalPrice === 0) return 0;
    const discountPercentage = ((originalPrice - currentPrice) / originalPrice) * 100;
    return Math.round(discountPercentage);
};

export const applyMultipleDiscounts = (originalPrice: number, discountPercentages: number[]) => {
    let currentPrice = originalPrice;
    for (const discount of discountPercentages) {
        currentPrice = calculateDiscountedPrice(currentPrice, discount);
    }
    return currentPrice;
};

export const isDiscounted = (discountPercentage: number): boolean => {
    return discountPercentage > 0;
};

export const formatPrice = (price: number, currency: string = "€"): string => {
    return `${currency}${price.toFixed(2)}`;
};
