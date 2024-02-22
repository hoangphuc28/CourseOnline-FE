export default interface Course {
    id: string;
    title: string;
    requirement: string;
    level: string;
    description: string;
    language: string;
    price: {
        value: string;
        currency: string;
    };
    NumReviews: string;
    AvgRating: string;
    IsPublish: boolean;
    thumbnail: {
        url: string;
        width: string;
        height: string;
    };
    instructor: {
        id: string;
    };
}