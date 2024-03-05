import { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Done");
};