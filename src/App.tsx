// src/App.tsx
import React, { useState } from 'react';
import { ShippingLocationForm } from './components/ShippingLocationForm';
import { ItemForm } from './components/ItemForm';
import { InstallmentForm } from './components/InstallmentForm';
import { Input } from "@/components/ui/input.tsx";
import { Button} from "@/components/ui/button.tsx";
import './App.css'

function App() {
    const [orderData, setOrderData] = useState({
        externalId: '',
        buyerTaxId: '',
        sellerTaxId: '37154724000108', // Hardcoded
        subtotalAmountCents: 0,
        taxAmountCents: 0,
        shippingCostCents: 0,
        estimatedDeliveryDateUTC: '',
        shippingLocation: {
            address1: '',
            address2: '',
            city: '',
            region: '',
            postalCode: '',
            country: '',
        },
        items: [],
        installments: [],
    });

    // Handler functions to update state
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // Prepare data for submission
        console.log('Order Data:', orderData);

        // Example of sending data to the backend
        try {
            const response = await fetch('http://localhost:3000/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
            const result = await response.json();
            console.log('Response from server:', result);
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <div className="p-4 max-w-screen-sm">
            <h1 className="text-2xl font-bold mb-4">Create Order</h1>
            <div className="space-y-4">
                {/* Order Information */}
                <div>
                    <label className="block mb-2">External ID:</label>
                    <Input
                        type="text"
                        name="externalId"
                        value={orderData.externalId}
                        onChange={handleInputChange}
                        placeholder="Enter External ID"
                    />
                </div>
                <div>
                    <label className="block mb-2">Buyer Tax ID:</label>
                    <Input
                        type="text"
                        name="buyerTaxId"
                        value={orderData.buyerTaxId}
                        onChange={handleInputChange}
                        placeholder="Enter Buyer Tax ID"
                    />
                </div>
                {/* Seller Tax ID is hardcoded */}
                {/* Financial Information */}
                <div>
                    <label className="block mb-2">Subtotal Amount (in cents):</label>
                    <Input
                        type="number"
                        name="subtotalAmountCents"
                        value={orderData.subtotalAmountCents}
                        onChange={handleInputChange}
                        placeholder="Enter Subtotal Amount"
                    />
                </div>
                <div>
                    <label className="block mb-2">Tax Amount (in cents):</label>
                    <Input
                        type="number"
                        name="taxAmountCents"
                        value={orderData.taxAmountCents}
                        onChange={handleInputChange}
                        placeholder="Enter Tax Amount"
                    />
                </div>
                <div>
                    <label className="block mb-2">Shipping Cost (in cents):</label>
                    <Input
                        type="number"
                        name="shippingCostCents"
                        value={orderData.shippingCostCents}
                        onChange={handleInputChange}
                        placeholder="Enter Shipping Cost"
                    />
                </div>
                {/* Estimated Delivery Date */}
                <div>
                    <label className="block mb-2">Estimated Delivery Date (UTC):</label>
                    <Input
                        type="datetime-local"
                        name="estimatedDeliveryDateUTC"
                        value={orderData.estimatedDeliveryDateUTC}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Shipping Location */}
                <ShippingLocationForm
                    shippingLocation={orderData.shippingLocation}
                    setShippingLocation={(location) =>
                        setOrderData({ ...orderData, shippingLocation: location })
                    }
                />
                {/* Items */}
                <ItemForm
                    items={orderData.items}
                    setItems={(items) => setOrderData({ ...orderData, items })}
                />
                {/* Installments */}
                <InstallmentForm
                    installments={orderData.installments}
                    setInstallments={(installments) =>
                        setOrderData({ ...orderData, installments })
                    }
                />
                {/* Submit Button */}
                <Button onClick={handleSubmit}>Submit Order</Button>
            </div>
        </div>
    );
}

export default App;
