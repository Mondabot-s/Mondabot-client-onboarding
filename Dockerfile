# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./
COPY mondabot-dashboard/package*.json ./mondabot-dashboard/
COPY server/package*.json ./server/

# Install ALL dependencies (including devDependencies) for building
RUN npm install
RUN cd mondabot-dashboard && npm install
RUN cd server && npm install --production

# Copy source code
COPY . .

# Build the Next.js frontend (this needs devDependencies)
RUN cd mondabot-dashboard && npm run build

# Remove devDependencies after build to reduce image size
RUN cd mondabot-dashboard && npm prune --production

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership of the app directory
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose the port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Start the server
CMD ["npm", "run", "server"] 