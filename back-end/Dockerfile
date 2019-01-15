FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD ./target/springBoot-angular4-auth-0.0.1.jar app.jar
ENV JAVA_OPTS=""
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar
