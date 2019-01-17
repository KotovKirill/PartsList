package servlets;

import DAO.DAO1;
import com.google.gson.Gson;
import model.Part;
import org.apache.log4j.varia.NullAppender;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import java.io.IOException;
import java.util.List;

@WebServlet("/Main")
public class MainServlet extends HttpServlet {
    @Override
    public void service(ServletRequest req, ServletResponse res) throws IOException {
        if (req.getParameter("showParts") != null && req.getParameter("showParts").equals("true")) {
            res.setContentType("text/html; charset=UTF-8");
            org.apache.log4j.BasicConfigurator.configure(new NullAppender());

            List allObjects = DAO1.getAllObjects(Part.class);
            Gson gson = new Gson();
            String json = gson.toJson(allObjects);
            res.getWriter().write(json);
            DAO1.closeOpenedSession();
        }

        if (req.getParameter("deletePart") != null && req.getParameter("id") != null) {
            Long id = Long.valueOf(req.getParameter("id"));
            DAO1.deleteObjectById(id, Part.class);
            res.getWriter().write("OK");
            DAO1.closeOpenedSession();
        }

        if (req.getParameter("updatePart") != null) {
            Long id = Long.valueOf(req.getParameter("id"));
            Integer count = Integer.valueOf(req.getParameter("count"));
            Integer need = Integer.valueOf(req.getParameter("need"));
            String name = req.getParameter("name");
            Part part = new Part(id,name, need, count);
            DAO1.updateObject(part);
            res.getWriter().write("OK");
            DAO1.closeOpenedSession();
        }

        if (req.getParameter("createPart") != null) {
            System.out.println("hjkl");
            Integer count = Integer.valueOf(req.getParameter("count"));
            Integer need = Integer.valueOf(req.getParameter("need"));
            String name = req.getParameter("name");
            Part part = new Part(name, need, count);
            DAO1.addObject(part);
            res.getWriter().write("OK");
            DAO1.closeOpenedSession();
        }
    }
}
