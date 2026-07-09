package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        System.out.println("--- Starting Spring Application Context ---");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("--- Context Loaded. Fetching Beans ---");

        BookService service =
                context.getBean("bookService", BookService.class);

        service.displayServiceStatus();

        ((ClassPathXmlApplicationContext) context).close();
    }
}