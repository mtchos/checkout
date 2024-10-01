// src/components/ShippingLocationForm.tsx
import React from 'react';
import { Input } from "@/components/ui/input.tsx";

interface ShippingLocation {
    address1: string;
    address2: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
}

interface Props {
    shippingLocation: ShippingLocation;
    setShippingLocation: (location: ShippingLocation) => void;
}

export const ShippingLocationForm: React.FC<Props> = ({
                                                          shippingLocation,
                                                          setShippingLocation,
                                                      }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShippingLocation({ ...shippingLocation, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Shipping Location</h2>
            <div className="space-y-2">
                <div>
                    <label className="block">Address 1:</label>
                    <Input
                        type="text"
                        name="address1"
                        value={shippingLocation.address1}
                        onChange={handleChange}
                        placeholder="Enter Address 1"
                    />
                </div>
                <div>
                    <label className="block">Address 2:</label>
                    <Input
                        type="text"
                        name="address2"
                        value={shippingLocation.address2}
                        onChange={handleChange}
                        placeholder="Enter Address 2"
                    />
                </div>
                <div>
                    <label className="block">City:</label>
                    <Input
                        type="text"
                        name="city"
                        value={shippingLocation.city}
                        onChange={handleChange}
                        placeholder="Enter City"
                    />
                </div>
                <div>
                    <label className="block">Region:</label>
                    <Input
                        type="text"
                        name="region"
                        value={shippingLocation.region}
                        onChange={handleChange}
                        placeholder="Enter Region"
                    />
                </div>
                <div>
                    <label className="block">Postal Code:</label>
                    <Input
                        type="text"
                        name="postalCode"
                        value={shippingLocation.postalCode}
                        onChange={handleChange}
                        placeholder="Enter Postal Code"
                    />
                </div>
                <div>
                    <label className="block">Country:</label>
                    <Input
                        type="text"
                        name="country"
                        value={shippingLocation.country}
                        onChange={handleChange}
                        placeholder="Enter Country"
                    />
                </div>
            </div>
        </div>
    );
};
