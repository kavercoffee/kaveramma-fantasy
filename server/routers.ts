import { router } from "./_core/trpc";
import { authRouter } from "./authRouter";

export const appRouter = router({
  auth: authRouter,

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
