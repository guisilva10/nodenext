import { inngest } from "@/inngest/client";
import { createTRPCRouter, protectedProcedure } from "../init";
import db from "@/services/database/prisma";
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return db.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "gui@gmail.com",
      },
    });
    return db.workflow.create({
      data: {
        name: "workflow",
      },
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
