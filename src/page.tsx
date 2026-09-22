import { Link } from "react-router";
import { apps } from "./lib/appDetails";

export default function Home() {
  return (
    <section className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {apps.map((app) => (
        <div key={app.title} className="card bg-base-100 shadow">
          <figure>
            <img src={app.image} alt="app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{app.title}</h2>
            <p>{app.desc}</p>
            <div className="card-actions">
              <Link to={app.link} className="btn btn-primary w-full">مشاهده</Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
