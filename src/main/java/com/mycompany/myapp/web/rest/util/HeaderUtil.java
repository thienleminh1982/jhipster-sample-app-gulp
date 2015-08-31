package com.mycompany.myapp.web.rest.util;

import org.springframework.http.HttpHeaders;

/**
 * Utility class for http header creation.
 *
 */
public class HeaderUtil {
 
    public static HttpHeaders createAlert(String message, String param) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-samplegulpApp-alert", message);
        headers.add("X-samplegulpApp-params", param);
        return headers;
    }
    
    public static HttpHeaders createEntityCreationAlert(String entityName, String param) {
        return createAlert("samplegulpApp." + entityName + ".created", param);
    }

    public static HttpHeaders createEntityUpdateAlert(String entityName, String param) {
        return createAlert("samplegulpApp." + entityName + ".updated", param);
    }

    public static HttpHeaders createEntityDeletionAlert(String entityName, String param) {
        return createAlert("samplegulpApp." + entityName + ".deleted", param);
    }

}