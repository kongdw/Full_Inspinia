(function(){
Template.__checkName("rightSidebar");
Template["rightSidebar"] = new Template("Template.rightSidebar", (function() {
  var view = this;
  return HTML.Raw('<div id="right-sidebar">\n        <div class="sidebar-container">\n\n            <ul class="nav nav-tabs navs-3">\n\n                <li class="active"><a data-toggle="tab" href="#tab-1">\n                    Notes\n                </a></li>\n                <li><a data-toggle="tab" href="#tab-2">\n                    Projects\n                </a></li>\n                <li class=""><a data-toggle="tab" href="#tab-3">\n                    <i class="fa fa-gear"></i>\n                </a></li>\n            </ul>\n\n            <div class="tab-content">\n\n                <div id="tab-1" class="tab-pane active">\n                    <div class="sidebar-title">\n                        <h3> <i class="fa fa-comments-o"></i> Latest Notes</h3>\n                        <small><i class="fa fa-tim"></i> You have 10 new message.</small>\n                    </div>\n                    <div>\n                        <div class="sidebar-message">\n                            <a href="#">\n                                <div class="pull-left text-center">\n                                    <img alt="image" class="img-circle message-avatar" src="img/a1.jpg">\n\n                                    <div class="m-t-xs">\n                                        <i class="fa fa-star text-warning"></i>\n                                        <i class="fa fa-star text-warning"></i>\n                                    </div>\n                                </div>\n                                <div class="media-body">\n\n                                    There are many variations of passages of Lorem Ipsum available.\n                                    <br>\n                                    <small class="text-muted">Today 4:21 pm</small>\n                                </div>\n                            </a>\n                        </div>\n                        <div class="sidebar-message">\n                            <a href="#">\n                                <div class="pull-left text-center">\n                                    <img alt="image" class="img-circle message-avatar" src="img/a2.jpg">\n                                </div>\n                                <div class="media-body">\n                                    The point of using Lorem Ipsum is that it has a more-or-less normal.\n                                    <br>\n                                    <small class="text-muted">Yesterday 2:45 pm</small>\n                                </div>\n                            </a>\n                        </div>\n                        <div class="sidebar-message">\n                            <a href="#">\n                                <div class="pull-left text-center">\n                                    <img alt="image" class="img-circle message-avatar" src="img/a3.jpg">\n\n                                    <div class="m-t-xs">\n                                        <i class="fa fa-star text-warning"></i>\n                                        <i class="fa fa-star text-warning"></i>\n                                        <i class="fa fa-star text-warning"></i>\n                                    </div>\n                                </div>\n                                <div class="media-body">\n                                    Mevolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                                    <br>\n                                    <small class="text-muted">Yesterday 1:10 pm</small>\n                                </div>\n                            </a>\n                        </div>\n                        <div class="sidebar-message">\n                            <a href="#">\n                                <div class="pull-left text-center">\n                                    <img alt="image" class="img-circle message-avatar" src="img/a4.jpg">\n                                </div>\n\n                                <div class="media-body">\n                                    Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the\n                                    <br>\n                                    <small class="text-muted">Monday 8:37 pm</small>\n                                </div>\n                            </a>\n                        </div>\n                        <div class="sidebar-message">\n                            <a href="#">\n                                <div class="pull-left text-center">\n                                    <img alt="image" class="img-circle message-avatar" src="img/a8.jpg">\n                                </div>\n                                <div class="media-body">\n\n                                    All the Lorem Ipsum generators on the Internet tend to repeat.\n                                    <br>\n                                    <small class="text-muted">Today 4:21 pm</small>\n                                </div>\n                            </a>\n                        </div>\n                        <div class="sidebar-message">\n                            <a href="#">\n                                <div class="pull-left text-center">\n                                    <img alt="image" class="img-circle message-avatar" src="img/a7.jpg">\n                                </div>\n                                <div class="media-body">\n                                    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n                                    <br>\n                                    <small class="text-muted">Yesterday 2:45 pm</small>\n                                </div>\n                            </a>\n                        </div>\n                        <div class="sidebar-message">\n                            <a href="#">\n                                <div class="pull-left text-center">\n                                    <img alt="image" class="img-circle message-avatar" src="img/a3.jpg">\n\n                                    <div class="m-t-xs">\n                                        <i class="fa fa-star text-warning"></i>\n                                        <i class="fa fa-star text-warning"></i>\n                                        <i class="fa fa-star text-warning"></i>\n                                    </div>\n                                </div>\n                                <div class="media-body">\n                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.\n                                    <br>\n                                    <small class="text-muted">Yesterday 1:10 pm</small>\n                                </div>\n                            </a>\n                        </div>\n                        <div class="sidebar-message">\n                            <a href="#">\n                                <div class="pull-left text-center">\n                                    <img alt="image" class="img-circle message-avatar" src="img/a4.jpg">\n                                </div>\n                                <div class="media-body">\n                                    Uncover many web sites still in their infancy. Various versions have.\n                                    <br>\n                                    <small class="text-muted">Monday 8:37 pm</small>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div id="tab-2" class="tab-pane">\n\n                    <div class="sidebar-title">\n                        <h3> <i class="fa fa-cube"></i> Latest projects</h3>\n                        <small><i class="fa fa-tim"></i> You have 14 projects. 10 not completed.</small>\n                    </div>\n\n                    <ul class="sidebar-list">\n                        <li>\n                            <a href="#">\n                                <div class="small pull-right m-t-xs">9 hours ago</div>\n                                <h4>Business valuation</h4>\n                                It is a long established fact that a reader will be distracted.\n\n                                <div class="small">Completion with: 22%</div>\n                                <div class="progress progress-mini">\n                                    <div style="width: 22%;" class="progress-bar progress-bar-warning"></div>\n                                </div>\n                                <div class="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>\n                            </a>\n                        </li>\n                        <li>\n                            <a href="#">\n                                <div class="small pull-right m-t-xs">9 hours ago</div>\n                                <h4>Contract with Company </h4>\n                                Many desktop publishing packages and web page editors.\n\n                                <div class="small">Completion with: 48%</div>\n                                <div class="progress progress-mini">\n                                    <div style="width: 48%;" class="progress-bar"></div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a href="#">\n                                <div class="small pull-right m-t-xs">9 hours ago</div>\n                                <h4>Meeting</h4>\n                                By the readable content of a page when looking at its layout.\n\n                                <div class="small">Completion with: 14%</div>\n                                <div class="progress progress-mini">\n                                    <div style="width: 14%;" class="progress-bar progress-bar-info"></div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a href="#">\n                                <span class="label label-primary pull-right">NEW</span>\n                                <h4>The generated</h4>\n                                There are many variations of passages of Lorem Ipsum available.\n                                <div class="small">Completion with: 22%</div>\n                                <div class="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>\n                            </a>\n                        </li>\n                        <li>\n                            <a href="#">\n                                <div class="small pull-right m-t-xs">9 hours ago</div>\n                                <h4>Business valuation</h4>\n                                It is a long established fact that a reader will be distracted.\n\n                                <div class="small">Completion with: 22%</div>\n                                <div class="progress progress-mini">\n                                    <div style="width: 22%;" class="progress-bar progress-bar-warning"></div>\n                                </div>\n                                <div class="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>\n                            </a>\n                        </li>\n                        <li>\n                            <a href="#">\n                                <div class="small pull-right m-t-xs">9 hours ago</div>\n                                <h4>Contract with Company </h4>\n                                Many desktop publishing packages and web page editors.\n\n                                <div class="small">Completion with: 48%</div>\n                                <div class="progress progress-mini">\n                                    <div style="width: 48%;" class="progress-bar"></div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a href="#">\n                                <div class="small pull-right m-t-xs">9 hours ago</div>\n                                <h4>Meeting</h4>\n                                By the readable content of a page when looking at its layout.\n\n                                <div class="small">Completion with: 14%</div>\n                                <div class="progress progress-mini">\n                                    <div style="width: 14%;" class="progress-bar progress-bar-info"></div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a href="#">\n                                <span class="label label-primary pull-right">NEW</span>\n                                <h4>The generated</h4>\n                                <!--<div class="small pull-right m-t-xs">9 hours ago</div>-->\n                                There are many variations of passages of Lorem Ipsum available.\n                                <div class="small">Completion with: 22%</div>\n                                <div class="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>\n                            </a>\n                        </li>\n\n                    </ul>\n\n                </div>\n\n                <div id="tab-3" class="tab-pane">\n\n                    <div class="sidebar-title">\n                        <h3><i class="fa fa-gears"></i> Settings</h3>\n                        <small><i class="fa fa-tim"></i> You have 14 projects. 10 not completed.</small>\n                    </div>\n\n                    <div class="setings-item">\n                    <span>\n                        Show notifications\n                    </span>\n                        <div class="switch">\n                            <div class="onoffswitch">\n                                <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example">\n                                <label class="onoffswitch-label" for="example">\n                                    <span class="onoffswitch-inner"></span>\n                                    <span class="onoffswitch-switch"></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="setings-item">\n                    <span>\n                        Disable Chat\n                    </span>\n                        <div class="switch">\n                            <div class="onoffswitch">\n                                <input type="checkbox" name="collapsemenu" checked="" class="onoffswitch-checkbox" id="example2">\n                                <label class="onoffswitch-label" for="example2">\n                                    <span class="onoffswitch-inner"></span>\n                                    <span class="onoffswitch-switch"></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="setings-item">\n                    <span>\n                        Enable history\n                    </span>\n                        <div class="switch">\n                            <div class="onoffswitch">\n                                <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example3">\n                                <label class="onoffswitch-label" for="example3">\n                                    <span class="onoffswitch-inner"></span>\n                                    <span class="onoffswitch-switch"></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="setings-item">\n                    <span>\n                        Show charts\n                    </span>\n                        <div class="switch">\n                            <div class="onoffswitch">\n                                <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example4">\n                                <label class="onoffswitch-label" for="example4">\n                                    <span class="onoffswitch-inner"></span>\n                                    <span class="onoffswitch-switch"></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="setings-item">\n                    <span>\n                        Offline users\n                    </span>\n                        <div class="switch">\n                            <div class="onoffswitch">\n                                <input type="checkbox" checked="" name="collapsemenu" class="onoffswitch-checkbox" id="example5">\n                                <label class="onoffswitch-label" for="example5">\n                                    <span class="onoffswitch-inner"></span>\n                                    <span class="onoffswitch-switch"></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="setings-item">\n                    <span>\n                        Global search\n                    </span>\n                        <div class="switch">\n                            <div class="onoffswitch">\n                                <input type="checkbox" checked="" name="collapsemenu" class="onoffswitch-checkbox" id="example6">\n                                <label class="onoffswitch-label" for="example6">\n                                    <span class="onoffswitch-inner"></span>\n                                    <span class="onoffswitch-switch"></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="setings-item">\n                    <span>\n                        Update everyday\n                    </span>\n                        <div class="switch">\n                            <div class="onoffswitch">\n                                <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example7">\n                                <label class="onoffswitch-label" for="example7">\n                                    <span class="onoffswitch-inner"></span>\n                                    <span class="onoffswitch-switch"></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="sidebar-content">\n                        <h4>Settings</h4>\n                        <div class="small">\n                            I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                            And typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n                            Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>');
}));

}).call(this);