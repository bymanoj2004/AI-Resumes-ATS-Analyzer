import pdf from "pdf-parse";

export async function parseResume(fileBuffer) {
    try {
        if (!fileBuffer || fileBuffer.length === 0) {
            throw new Error("Received empty buffer");
        }

        const data = await pdf(fileBuffer);
        return data.text;
    } catch (error) {
        console.error("PDF Parsing Error:", error);
        throw error;
    }
}