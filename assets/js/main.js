"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

/* Github Calendar */
new GitHubCalendar("#github-graph", "soldochris", { responsive: true });

/* Github Activity Feed*/
GitHubActivity.feed({ username: "soldochris", selector: "#ghfeed" });
