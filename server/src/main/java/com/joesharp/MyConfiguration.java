package com.joesharp;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import org.hibernate.validator.constraints.NotEmpty;
import ca.grimoire.dropwizard.cors.config.CrossOriginFilterFactory;
import ca.grimoire.dropwizard.cors.config.CrossOriginFilterFactoryHolder;

public class MyConfiguration extends Configuration implements CrossOriginFilterFactoryHolder {
    @NotEmpty
    @JsonProperty
    private String serverName = "Bowser";

    public String getServerName() {
        return serverName;
    }

    private CrossOriginFilterFactory cors = new CrossOriginFilterFactory();

    public void setCors(CrossOriginFilterFactory cors) {
        this.cors = cors;
    }

    @Override
    public CrossOriginFilterFactory getCors() {
        return cors;
    }
}
