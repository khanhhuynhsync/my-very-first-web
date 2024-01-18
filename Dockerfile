FROM node:latest
WORKDIR /work/
RUN chown 1001 /work \
    && chmod "g+rwX" /work \
    && chown 1001:root /work
RUN mkdir logs \
    && chmod "g+rwX" logs \
    && chown 1001:root logs
COPY --chown=1001:root public /work/public
COPY --chown=1001:root routes /work/routes
COPY --chown=1001:root views /work/views
COPY --chown=1001:root app.js /work/app.js
COPY --chown=1001:root package.json /work/package.json

# Install dependencies
RUN npm install

EXPOSE 8080
USER 1001

ENTRYPOINT ["node", "app.js"]