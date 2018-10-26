export const privateResolver = resolverFunction => async (parent, args, context, info) => {
    if (!context.req.user) {
      throw new Error("privateResolver: No JWT. proceed is refused");
    }
    const resolved = await resolverFunction(parent, args, context, info);

    return resolved;
};

  