import { PaymentCode } from "sepa-payment-code";
import QRCode from "qrcode";

export function Test(canvas, montant) {
	const paymentCode = new PaymentCode("Your name", "BE71096123456769", parseFloat(montant));
	QRCode.toCanvas(canvas, paymentCode.getPayload());
}
