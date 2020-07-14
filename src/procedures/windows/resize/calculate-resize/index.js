import pipe from "scr-pipe";

const checkWindowTop = (ctx) => {
  const maxTop = 0;
  const position = { x: ctx.position.x, y: ctx.position.y < maxTop ? maxTop : ctx.position.y };
  return { ...ctx, position };
};

const checkWindowBottom = (ctx) => {
  const maxBottom = window.innerHeight - 25;
  const position = { x: ctx.position.x, y: ctx.position.y > maxBottom ? maxBottom : ctx.position.y };
  return { ...ctx, position };
};

const checkWindowLeft = (ctx) => {
  const maxLeft = -(ctx.size.width - 25);
  const position = { x: ctx.position.x < maxLeft ? maxLeft : ctx.position.x, y: ctx.position.y };
  return { ...ctx, position };
};

const checkWindowRight = (ctx) => {
  const maxRight = window.innerWidth - 25;
  const position = { x: ctx.position.x > maxRight ? maxRight : ctx.position.x, y: ctx.position.y };
  return { ...ctx, position };
};

export default (dimensions, shouldDispatch) => {
  return shouldDispatch
    ? {
        position: { x: dimensions.left, y: dimensions.top },
        size: { height: dimensions.height, width: dimensions.width },
      }
    : pipe({
        position: {
          x: dimensions.left,
          y: dimensions.top,
        },
        size: {
          height: dimensions.height,
          width: dimensions.width,
        },
      })
        .flow(checkWindowTop)
        .flow(checkWindowBottom)
        .flow(checkWindowLeft)
        .flow(checkWindowRight)
        .close();
};
