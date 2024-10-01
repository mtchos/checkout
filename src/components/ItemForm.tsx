// src/components/ItemForm.tsx
import React, { useState } from 'react';
import { Input } from "@/components/ui/input.tsx";
import { Button} from "@/components/ui/button.tsx";

interface Item {
    productId: string;
    productName: string;
    quantity: number;
    unitPriceCents: number;
}

interface Props {
    items: Item[];
    setItems: (items: Item[]) => void;
}

export const ItemForm: React.FC<Props> = ({ items, setItems }) => {
    const [item, setItem] = useState<Item>({
        productId: '',
        productName: '',
        quantity: 0,
        unitPriceCents: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const addItem = () => {
        setItems([...items, item]);
        setItem({
            productId: '',
            productName: '',
            quantity: 0,
            unitPriceCents: 0,
        });
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Items</h2>
            <div className="space-y-2">
                <div>
                    <label className="block">Product ID:</label>
                    <Input
                        type="text"
                        name="productId"
                        value={item.productId}
                        onChange={handleChange}
                        placeholder="Enter Product ID"
                    />
                </div>
                <div>
                    <label className="block">Product Name:</label>
                    <Input
                        type="text"
                        name="productName"
                        value={item.productName}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                    />
                </div>
                <div>
                    <label className="block">Quantity:</label>
                    <Input
                        type="number"
                        name="quantity"
                        value={item.quantity}
                        onChange={handleChange}
                        placeholder="Enter Quantity"
                    />
                </div>
                <div>
                    <label className="block">Unit Price (in cents):</label>
                    <Input
                        type="number"
                        name="unitPriceCents"
                        value={item.unitPriceCents}
                        onChange={handleChange}
                        placeholder="Enter Unit Price"
                    />
                </div>
                <Button onClick={addItem} className="mt-2">
                    Add Item
                </Button>
            </div>
            {/* Display Added Items */}
            {items.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-bold">Added Items:</h3>
                    <ul className="list-disc pl-5">
                        {items.map((itm, index) => (
                            <li key={index}>
                                {itm.productName} (ID: {itm.productId}), Quantity: {itm.quantity}, Unit Price: {itm.unitPriceCents} cents
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
