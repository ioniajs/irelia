// @ts-nocheck
import { RightContent } from '@/components/Header';
import React from 'react';
import { RequestConfig } from 'umi';

export async function getInitialState() {
  return {};
}

export const layout = () => {
  return {
    rightContentRender: () => <RightContent />,
  };
};

export const request: RequestConfig = {
  prefix: API_HOST,
  timeout: 1000,
  // errorHandler: (error) => {
  //   console.log("网络错误：", error.message, error.data);
  // },
  errorConfig: {},
  middlewares: [
    async function middlewareA(ctx, next) {
      console.log('middlewareA');
      // try {
      //   const infoStr = await localStorage.getItem("auth-info");
      //   if (!!infoStr) {
      //     const info = JSON.parse(infoStr);

      //     ctx.req.options.headers = {
      //       ...ctx.req.options.headers,
      //       Authorization: `${info.tokenType} ${info.accessToken}`,
      //     };
      //   }
      // } catch (err) {
      //   console.error(err);
      // }
      await next();
    },
  ],
  requestInterceptors: [],
  responseInterceptors: [],
};
