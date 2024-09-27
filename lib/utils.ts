import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toSlug(str: string): string {
    return str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
}

export function formatDate(dateString: string | Date): string {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];

    const formattedDay = day < 10 ? `0${day}` : `${day}`;

    return `${formattedDay} ${month}`;
}

export function calculateNights(checkInDate: string | Date, checkOutDate: string | Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const checkInTime = new Date(checkInDate).getTime();
    const checkOutTime = new Date(checkOutDate).getTime();

    const differenceDays = Math.round(
        Math.abs((checkOutTime - checkInTime) / oneDay)
    );

    return differenceDays;
}

export function calculateTotalPrice(
    checkInDate: string | Date,
    checkOutDate: string | Date,
    nightlyRate: number
): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const checkInTime = new Date(checkInDate).getTime();
    const checkOutTime = new Date(checkOutDate).getTime();

    const differenceDays = Math.round(
        Math.abs((checkOutTime - checkInTime) / oneDay)
    );
    const totalPrice = differenceDays * nightlyRate;

    return totalPrice;
}

export function calculateAverageRating(ratings: { rating: number }[]): number {
    if (ratings.length === 0) {
        return 0;
    }

    const sum = ratings.reduce((total, r) => total + r.rating, 0);
    const average = sum / ratings.length;

    return average;
}
