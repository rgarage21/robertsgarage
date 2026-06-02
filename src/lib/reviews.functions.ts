import { createServerFn } from "@tanstack/react-start";
import { SHOP } from "./shop";

export type LiveReview = {
  name: string;
  rating: number;
  text: string;
  vehicle: string;
};

type GooglePlacesReview = {
  author_name?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

type GooglePlacesResponse = {
  result?: { reviews?: GooglePlacesReview[] };
  status?: string;
  error_message?: string;
};

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ reviews: LiveReview[]; source: "google" | "fallback" }> => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    // No key yet — let the UI fall back to its built-in reviews.
    if (!apiKey) {
      return { reviews: [], source: "fallback" };
    }

    try {
      const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
      url.searchParams.set("place_id", SHOP.placeId);
      url.searchParams.set("fields", "reviews");
      url.searchParams.set("reviews_sort", "newest");
      url.searchParams.set("key", apiKey);

      const res = await fetch(url.toString());
      if (!res.ok) {
        console.error(`Google Places API error: ${res.status} ${res.statusText}`);
        return { reviews: [], source: "fallback" };
      }

      const json = (await res.json()) as GooglePlacesResponse;
      if (json.status && json.status !== "OK") {
        console.error(`Google Places API status: ${json.status} ${json.error_message ?? ""}`);
        return { reviews: [], source: "fallback" };
      }

      const reviews: LiveReview[] = (json.result?.reviews ?? [])
        .filter((r) => r.text && r.author_name && r.rating)
        .map((r) => ({
          name: r.author_name as string,
          rating: r.rating as number,
          text: r.text as string,
          vehicle: r.relative_time_description ?? "",
        }));

      return { reviews, source: reviews.length ? "google" : "fallback" };
    } catch (error) {
      console.error("Failed to fetch Google reviews:", error);
      return { reviews: [], source: "fallback" };
    }
  },
);
