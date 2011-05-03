---
layout:     job
head:       my employment
id:         job
categories: [job]

hide_title: yes

main_format: png

techs:      [C++, Java, Subversion, T-SQL]
start_date: 2008-05-05
address:    http://mapleridgecapital.com
role:       Assistant Research Analyst
manager:    Tom Barford
---
Founded in 1998, "Mapleridge Capital Corporation is an alternative investment management company with an 11-year track record of providing investment advice."[^1] I joined Mapleridge Capital for a 16-month internship as part of the Professional Experience Year (PEY) Internship Program, the undergraduate paid internship program at the University of Toronto.

At Mapleridge's Product Investment Group, I conducted research and explored analytic techniques for use in proprietary trading strategies, primarily focusing on freqency-based analysis. The development environment used Visual Studio and C++, although other researchers used other IDEs such as Matlab.

Beyond research, I had a couple of software projects as well: one in design a program to calculate and report on slippage figures and another in debugging the research group's strategy testing platform.

The slippage calculator was a program written in VBA embedded in a Microsoft environment, using Excel as its front end and fetching data from a Microsoft SQL Server back end. The program presents the user a series of dialogs to select which ticker symbols and what kinds of metrics to report on, the generates the necessary query statements, executes them, then generates the requested charts and tables in a print-ready format in Excel.

The testing platform is a Java server-client program that helps provision server cores to research to test their strategies. It suffered from concurrency bugs that sometimes crashed testing processes that were designed to run over a lengthy period of time (e.g. overnight or through a weekend). I was tasked to examine the source and fix the underlying bugs, which largely involved properly locking shared resources, resolve consistency issues, and handling exceptions that may arise to preempt conditions that would crash the program.

In addition to those main priorities, the UI was redesigned to feel more like a Windows application and highlight various statuses to allow researchers to more easily glance at the UI. The underlying custom scripting language used to feed instruction batches into the platform was rewritten and extended (e.g. allow processes to be restarted) to allow researchers more options in testing their strategies and handling cases where their testing processes crashed or other produced unexpected results.

The last notable project was a minor task to design a process to migrate code written by researchers into a revision control system, namely Subversion. This was never completed, but a procedure and accompanying configuration and tutorials were written to allow researchers to migrate into a Subversion environment that integrated authentication into the Active Directory used by Mapleridge.

[^1]: [Mapleridge Capital Corp Alternative Investing - Home](http://www.mapleridgecapital.com/)

{% include abbrev.markdown %}
