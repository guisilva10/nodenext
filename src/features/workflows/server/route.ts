import { generateSlug } from "random-word-slugs";
import db from "@/services/database/prisma";
import {
  createTRPCRouter,
  premiumProcedure,
  protectedProcedure,
} from "@/trpc/init";
import z from "zod";

export const workflowsRouter = createTRPCRouter({
  create: premiumProcedure.mutation(({ ctx }) => {
    return db.workflow.create({
      data: {
        name: generateSlug(2),
        userId: ctx.auth.user.id,
      },
    });
  }),
  remove: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return db.workflow.delete({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
      });
    }),
  updateName: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1),
      }),
    )
    .mutation(({ ctx, input }) => {
      return db.workflow.update({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
        data: {
          name: input.name,
        },
      });
    }),
  getOne: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      return db.workflow.findUnique({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
      });
    }),
  getMany: protectedProcedure.query(({ ctx }) => {
    return db.workflow.findMany({
      where: {
        userId: ctx.auth.user.id,
      },
    });
  }),
});
