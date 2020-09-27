import pipe from "scr-pipe";

const checkWindowTop = (ctx) => {
  const maxTop = 0;
  const position = { x: ctx.position.x, y: ctx.position.y < maxTop ? maxTop : ctx.position.y };
  return { ...ctx, position };
};

const checkWindowBottom = (ctx) => {
  const maxBottom = window.innerHeight - 24;
  const position = { x: ctx.position.x, y: ctx.position.y > maxBottom ? maxBottom : ctx.position.y };
  return { ...ctx, position };
};

const checkWindowLeft = (ctx) => {
  const maxLeft = -(ctx.size.width - 24);
  const position = { x: ctx.position.x < maxLeft ? maxLeft : ctx.position.x, y: ctx.position.y };
  return { ...ctx, position };
};

const checkWindowRight = (ctx) => {
  const maxRight = window.innerWidth - 24;
  const position = { x: ctx.position.x > maxRight ? maxRight : ctx.position.x, y: ctx.position.y };
  return { ...ctx, position };
};

export default ({ elem, event, window }) => {
  const { top: prevTop, left: prevLeft } = elem.getBoundingClientRect();

  return pipe({
    position: {
      x: prevLeft + event.movementX,
      y: prevTop + event.movementY,
    },
    size: window.size,
  })
    .flow(checkWindowTop)
    .flow(checkWindowBottom)
    .flow(checkWindowLeft)
    .flow(checkWindowRight)
    .close().position;
};
