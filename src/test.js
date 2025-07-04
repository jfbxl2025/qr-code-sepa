import { PaymentCode } from "sepa-payment-code";
import QRCode from "qrcode";

export function Test(canvas, montant) {
	const paymentCode = new PaymentCode("Jean-François Lorand", "BE72000457463316", parseFloat(montant));
	QRCode.toCanvas(canvas, paymentCode.getPayload());
}
