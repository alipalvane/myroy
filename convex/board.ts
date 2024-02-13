import { v } from "convex/values";
import { mutation } from "./_generated/server";

const images = [
  "/placeholder/logo-1.svg",
  "/placeholder/logo-2.svg",
  "/placeholder/logo-3.svg",
  "/placeholder/logo-4.svg",
  "/placeholder/logo-5.svg",
  "/placeholder/logo-6.svg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name ? identity.name : 'Anonymous',
      imageUrl: randomImage,
    });

    return board;
  },
});