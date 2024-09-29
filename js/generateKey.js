import crypto from "crypto";

export function generateKey() {
    return crypto.randomBytes(32).toString("hex");
}

export function calculateHMAC(key, move) {
    return crypto.createHmac("SHA256", key).update(move).digest("hex");
}