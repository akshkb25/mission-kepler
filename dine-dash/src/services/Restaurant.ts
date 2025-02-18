

export interface Restaurant{
    id: number;
    name: string;
    timings: string;
    location: string;
    cuisine: string[];
    rating: number;
    type: string[];
    isCertified: boolean;
    restaurantImageSrc: string;
    items: MenuItem[];
}

export interface MenuItem {
    id: string;
    name: string;
    imageSrc: string;
    description: string;
    Price: string;
}

export interface CarouselItem{
    imageSrc: string;
    description: string;
}

export const fetchAPI = async (API:string): Promise<any[]> => {
    const response = await fetch(API);
    const data = await response.json();
    const apiData = Array.isArray(data) ? data : data.data ?? [];
    return apiData;
    
};


