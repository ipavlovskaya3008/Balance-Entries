package com.balanceEntries.balanceentries;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
public class EntryController {

    @Autowired
    ReadAccount readAccount;

	@GetMapping("/form")
    public String getForm()throws IOException {
        System.out.println(readAccount.readAccounts());
        //listDD.forEach(System.out::println);
        return "form";
    }

	@PostMapping("/form")

	public void getJso(@RequestBody Form form) {
	//form.stream().forEach(c -> System.out.println(c.toString()));
    //System.out.println(form.toString());
	//	System.out.println(form);
        System.out.println(form.priorEntries.get(0).getPriorEntryYear());
        System.out.println(form.currentEntries.get(0).getCurrentEntryYear());

	}

}