import { lazy } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import {
  findGrammarTopicBySlug,
  grammarTopicSectionDetails,
  visibleGrammarTopicSections
} from "./data/grammarTopics";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage }))
);
const VerbTensesPage = lazy(() =>
  import("./pages/VerbTensesPage").then((module) => ({ default: module.VerbTensesPage }))
);
const VerbTenseDetailPage = lazy(() =>
  import("./pages/VerbTenseDetailPage").then((module) => ({
    default: module.VerbTenseDetailPage
  }))
);
const GrammarTopicsPage = lazy(() =>
  import("./pages/GrammarTopicsPage").then((module) => ({ default: module.GrammarTopicsPage }))
);
const GrammarTopicDetailPage = lazy(() =>
  import("./pages/GrammarTopicDetailPage").then((module) => ({
    default: module.GrammarTopicDetailPage
  }))
);
const IrregularVerbsPage = lazy(() =>
  import("./pages/IrregularVerbsPage").then((module) => ({
    default: module.IrregularVerbsPage
  }))
);
const IrregularVerbDetailPage = lazy(() =>
  import("./pages/IrregularVerbDetailPage").then((module) => ({
    default: module.IrregularVerbDetailPage
  }))
);

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="verb-tenses" element={<VerbTensesPage />} />
        <Route path="verb-tenses/:slug" element={<VerbTenseDetailPage />} />
        {visibleGrammarTopicSections.map((section) => {
          const details = grammarTopicSectionDetails[section];

          return (
            <Route key={section} path={details.path.slice(1)}>
              <Route index element={<GrammarTopicsPage section={section} />} />
              <Route
                path=":slug"
                element={
                  <GrammarTopicDetailPage
                    section={section}
                    backPath={details.path}
                    backLabel={details.label}
                  />
                }
              />
            </Route>
          );
        })}
        <Route path="core-grammar" element={<Navigate to="/sentence-building" replace />} />
        <Route path="core-grammar/:slug" element={<LegacyCoreGrammarRedirect />} />
        <Route path="irregular-verbs" element={<IrregularVerbsPage />} />
        <Route path="irregular-verbs/:slug" element={<IrregularVerbDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

function LegacyCoreGrammarRedirect() {
  const { slug } = useParams();
  const topic = slug ? findGrammarTopicBySlug(slug) : undefined;

  return (
    <Navigate
      to={topic ? `${grammarTopicSectionDetails[topic.section].path}/${topic.slug}` : "/sentence-building"}
      replace
    />
  );
}
