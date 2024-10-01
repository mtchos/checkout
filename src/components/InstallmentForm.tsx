// src/components/InstallmentForm.tsx
import React, { useState } from 'react';
import { Input } from "@/components/ui/input.tsx";
import { Button} from "@/components/ui/button.tsx";

interface Installment {
    maturityDate: string;
    faceValueCents: number;
}

interface Props {
    installments: Installment[];
    setInstallments: (installments: Installment[]) => void;
}

export const InstallmentForm: React.FC<Props> = ({ installments, setInstallments }) => {
    const [installment, setInstallment] = useState<Installment>({
        maturityDate: '',
        faceValueCents: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInstallment({ ...installment, [e.target.name]: e.target.value });
    };

    const addInstallment = () => {
        setInstallments([...installments, installment]);
        setInstallment({
            maturityDate: '',
            faceValueCents: 0,
        });
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Installments</h2>
            <div className="space-y-2">
                <div>
                    <label className="block">Maturity Date (UTC):</label>
                    <Input
                        type="datetime-local"
                        name="maturityDate"
                        value={installment.maturityDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block">Face Value (in cents):</label>
                    <Input
                        type="number"
                        name="faceValueCents"
                        value={installment.faceValueCents}
                        onChange={handleChange}
                        placeholder="Enter Face Value"
                    />
                </div>
                <Button onClick={addInstallment} className="mt-2">
                    Add Installment
                </Button>
            </div>
            {/* Display Added Installments */}
            {installments.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-bold">Added Installments:</h3>
                    <ul className="list-disc pl-5">
                        {installments.map((inst, index) => (
                            <li key={index}>
                                Maturity Date: {inst.maturityDate}, Face Value: {inst.faceValueCents} cents
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
