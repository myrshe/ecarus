import React, { useState } from "react";
import styles from "./index.module.scss";
import AuthForm from "./components/AuthForm";
import SmsForm from "./components/SmsForm";
import CodeForm from "./components/CodeForm";
import PartnerForm from "./components/PartnerForm";

type Step = "auth" | "sms" | "code" | "partner";

export const AuthModal = ({ onClose }: { onClose: () => void }) => {
    const [step, setStep] = useState<Step>("auth");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleToSms = () => setStep("sms");
    const handleToCode = () => setStep("code");
    const handleToPartner = () => setStep("partner");
    const handleBack = () => setStep("auth");

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}>×</button>
                {step === "auth" && (
                    <AuthForm
                        onSms={handleToSms}
                        onPartner={handleToPartner}
                        onError={setError}
                        onSuccess={onClose}
                    />
                )}
                {step === "sms" && (
                    <SmsForm
                        onGetCode={handleToCode}
                        onBack={handleBack}
                        onPartner={handleToPartner}
                    />
                )}
                {step === "code" && (
                    <CodeForm
                        phone={phone}
                        onSuccess={onClose}
                        onError={setError}
                        onBack={handleBack}
                        onPartner={handleToPartner}
                    />
                )}
                {step === "partner" && (
                    <PartnerForm onBack={handleBack} />
                )}
                {error && <div className={styles.error}>{error}</div>}
            </div>
        </div>
    );
};
