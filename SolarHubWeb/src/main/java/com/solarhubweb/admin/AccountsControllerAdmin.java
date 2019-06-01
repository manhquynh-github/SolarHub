package com.solarhubweb.admin;

import com.solarhubweb.constant.SystemConstant;
import com.solarhubweb.model.NewsModel;
import com.solarhubweb.paging.PageRequest;
import com.solarhubweb.paging.Pageble;
import com.solarhubweb.service.IToyService;
import com.solarhubweb.sort.Sorter;
import com.solarhubweb.utils.FormUtil;

import javax.inject.Inject;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author DucTien
 */
@WebServlet(urlPatterns = {"/admin-accounts"})
public class AccountsControllerAdmin extends HttpServlet {

    @Inject
    private IToyService newsService;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //Thay vì dùng request.getParameter từng giá trị thì mình dùng
        //FormUtil để mapping với model của mình
        NewsModel model = FormUtil.toModel(NewsModel.class, request);
        Sorter sort = new Sorter(model.getSortName(), model.getSortBy());
        Pageble pageble = new PageRequest(model.getPage(), model.getMaxPageItem(), sort);

        model.setListResult(newsService.findAll(pageble));
        model.setTotalItem(newsService.getTotalItem());
        model.setTotalPage((int) Math.ceil((double) model.getTotalItem() / model.getMaxPageItem()));
        request.setAttribute(SystemConstant.MODEL, model);
        RequestDispatcher rd = request.getRequestDispatcher("/view/admin/accounts/add.jsp");
        rd.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }
}

