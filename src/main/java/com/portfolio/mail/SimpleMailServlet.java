package com.portfolio.mail;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.filter.HTTPBasicAuthFilter;
import com.sun.jersey.core.util.MultivaluedMapImpl;

public class SimpleMailServlet extends HttpServlet 
{

	private static final long serialVersionUID = -250900940224932079L;
	 
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
 
		String name = req.getParameter("name");
		String emailId =  req.getParameter("emailId");
		String message = req.getParameter("message");

		SendSimpleMessage(name, emailId, message);
	}

	public  String SendSimpleMessage(String name, String emailId, String message) 
	{
		Client client = Client.create();
		client.addFilter(new HTTPBasicAuthFilter("api", 
				"key-61f5c5ad90ed0752759c11abf3231944"));
		WebResource webResource =
				client.resource("https://api.mailgun.net/v3/www.dineshjaju.com" +
						"/messages");
		MultivaluedMapImpl formData = new MultivaluedMapImpl();
		formData.add("from", "PortFolio Contact " + name +" <mailgun@dineshjaju.com>");
		formData.add("to", "dineshkumarjaju@gmail.com"); 
		formData.add("from", "Excited " + name +" <mailgun@dineshjaju.com>");
		formData.add("to", "dineshkumarjaju@gmail.com");
		//formData.add("to", "YOU@YOUR_DOMAIN_NAME");
		formData.add("subject", "Portfolio Mail");
		formData.add("text", "Email Recieved from " + emailId + " with following message  "  + message);
		webResource.type(javax.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED).
		post(ClientResponse.class, formData);

		return "success " ;
	}
}
