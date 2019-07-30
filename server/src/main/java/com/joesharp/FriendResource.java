package com.joesharp;

import com.codahale.metrics.annotation.Timed;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Collections;
import java.util.List;

@Path("/friends")
@Produces(MediaType.APPLICATION_JSON)
public class FriendResource {
    private final String serverName;

    public FriendResource(final String serverName) {
        this.serverName = serverName;
    }

    @GET
    @Timed
    public String getServerName() {
        return serverName;
    }

    @GET
    @Path("/list")
    @Timed
    public List<FriendDTO> getFriends() {
        return Collections.emptyList();
    }


}
