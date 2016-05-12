package com.portfolio.mail;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.portfolio.model.Email;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.filter.HTTPBasicAuthFilter;
import com.sun.jersey.core.util.MultivaluedMapImpl;

@Controller
public class SendSimpleMail {
	
	@RequestMapping(value="/sendMail" , method = RequestMethod.POST)
	public  @ResponseBody String SendSimpleMessage(@RequestBody Email email) 
	{
		
		Client client = Client.create();
		client.addFilter(new HTTPBasicAuthFilter("api", 
				"key-61f5c5ad90ed0752759c11abf3231944"));
		WebResource webResource =
				client.resource("https://api.mailgun.net/v3/www.dineshjaju.com" +
						"/messages");
		MultivaluedMapImpl formData = new MultivaluedMapImpl();
		formData.add("from", "Excited User <mailgun@YOUR_DOMAIN_NAME>");
		formData.add("to", "dineshkumarjaju@gmail.com");
		//formData.add("to", "YOU@YOUR_DOMAIN_NAME");
		formData.add("subject", "Hello");
		formData.add("text", "Testing some Mailgun awesomness!");
		webResource.type(javax.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED).
		post(ClientResponse.class, formData);

		return "success " + email.toString() ;
	}

	
	@RequestMapping(value="/sendMailTest" , method = RequestMethod.GET)
	public  @ResponseBody String SendSimpleMessageTest(@RequestBody Email email) 
	{
			
		return "success " + email.toString() ;
	}

}
