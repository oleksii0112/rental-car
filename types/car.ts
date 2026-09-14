export interface CarsQueryParams {
  brand?: string;
  price?: number;
  minMileage?: number;
  maxMileage?: number;
  perPage?: number;
  page?: number;
}

export interface CarLocation {
  country: string;
  city: string;
  address: string;
}

export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: number;
  engine: string;
  rentalPrice: string;
  rentalCompany: string;
  rentalConditions: string[];
  mileage: number;
  stockNumber: number;
  features: string[];
  location: CarLocation;
  createdAt: string;
  updatedAt: string;
}

export interface CarsServerResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}

export interface BookingCarParams {
  name: string;
  email: string;
  comment: string;
}


export interface CarsFiltersResponse {
  brands: string[];
  price: {
    min: number;
    max: number;
  };
}