import { user } from "@/data/user";
import {
    RecommedationItemSkeleton,
    RecommendationItem,
} from "./recommendation-item";

export const RecommendationArea = () => {
    return (
        <div className="bg-gray-800 rounded-3xl">
            <h2 className="text-xl p-6">Quem seguir</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <RecommendationItem user={user} />
                <RecommedationItemSkeleton />
            </div>
        </div>
    );
};
