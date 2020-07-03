import pipe from "scr-pipe";

const checkWindowWidth = (ctx) => {
  const minWidth = 25;
  const size = { height: ctx.size.height, width: ctx.size.width < minWidth ? minWidth : ctx.size.width };
  return { ...ctx, size };
};

const checkWindowHeight = (ctx) => {
  const minHeight = 25;
  const size = {
    height: ctx.size.height < minHeight ? minHeight : ctx.size.height,
    width: ctx.size.width,
  };
  return { ...ctx, size };
};

const checkWindowTop = (ctx) => {
  const maxTop = 0;
  const position = { x: ctx.position.x, y: ctx.position.y < maxTop ? maxTop : ctx.position.y };
  return { ...ctx, position };
};

const checkWindowBottom = (ctx) => {
  const maxBottom = window.innerHeight - 23;
  const position = { x: ctx.position.x, y: ctx.position.y > maxBottom ? maxBottom : ctx.position.y };
  return { ...ctx, position };
};

const checkWindowLeft = (ctx) => {
  const maxLeft = -(ctx.size.width - 23);
  const position = { x: ctx.position.x < maxLeft ? maxLeft : ctx.position.x, y: ctx.position.y };
  return { ...ctx, position };
};

const checkWindowRight = (ctx) => {
  const maxRight = window.innerWidth - 23;
  const position = { x: ctx.position.x > maxRight ? maxRight : ctx.position.x, y: ctx.position.y };
  return { ...ctx, position };
};

export default ({ dimensions, window }) => {
  return pipe({
    position: {
      x: window.position.x + dimensions.left,
      y: window.position.y + dimensions.top,
    },
    size: {
      height: dimensions.height,
      width: dimensions.width,
    },
  })
    .flow(checkWindowWidth)
    .flow(checkWindowHeight)
    .flow(checkWindowTop)
    .flow(checkWindowBottom)
    .flow(checkWindowLeft)
    .flow(checkWindowRight)
    .close();
};
