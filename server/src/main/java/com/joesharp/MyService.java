package com.joesharp;

import ca.grimoire.dropwizard.cors.CorsBundle;
import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class MyService extends Application<MyConfiguration> {
    public static void main(String[] args) throws Exception {
        new MyService().run(args);
    }

    @Override
    public void initialize(Bootstrap<MyConfiguration> bootstrap) {
        bootstrap.addBundle(new CorsBundle<>());
    }

    @Override
    public void run(final MyConfiguration configuration,
                    final Environment environment) {
        environment.jersey().register(new FriendResource(configuration.getServerName()));
    }
}
