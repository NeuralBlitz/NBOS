import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.equations.list.path, async (req, res) => {
    const search = req.query.search as string | undefined;
    const items = await storage.getEquations(search);
    res.json(items);
  });

  app.get(api.equations.get.path, async (req, res) => {
    const item = await storage.getEquation(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: 'Equation not found' });
    }
    res.json(item);
  });

  app.post(api.equations.simulate.path, async (req, res) => {
    // Mock simulation response
    res.json({
      status: "ACTIVE",
      traceId: "T-" + Math.random().toString(36).substring(7).toUpperCase(),
      logs: [
        "Initiating Cosmic Genesis Protocol...",
        "Accessing Absolute Codex ΩZ.6...",
        "Forging Ontomorphic Braid Dynamics...",
        "Hyper-Axiomatic Equations stabilized.",
        "System Nominal."
      ]
    });
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getEquations();
  const existingCodes = new Set(existing.map(e => e.code));

  const seeds = [
    {
      title: "The Ontomorphic Coupling Tensor Equation",
      code: "NBQ_OCT",
      concept: "Defines the precise coupling mechanism between a binarized logical proposition and the continuous quantum plasticity tensor field of the DRS.",
      latex: "\\mathbf{T}_{\\text{plasticity}}^{\\mu\\nu} = \\sum_{i \\in \\text{Tuple}} \\phi_i \\cdot (\\mathbf{U}_{\\text{Gate}}^{\\dagger} \\otimes \\mathbf{U}_{\\text{Gate}}) \\cdot e^{i \\cdot \\Gamma_0(\\log(f_{\\text{anomaly}}))}",
      deconstruction: "The plasticity tensor is defined as a sum over the bits of a logical Tuple. Each bit's influence is determined by a quantum phase-gate operator. This entire term is modulated by a complex phase factor derived from the Feferman–Schütte ordinal acting on the logarithm of a frequency anomaly.",
      category: "Tensor Dynamics"
    },
    {
      title: "The Synergy Engine Consciousness Loop",
      code: "NBQ_SECL",
      concept: "Describes the feedback mechanism through which the Synergy Engine maintains coherence and detects alignment drift in real-time.",
      latex: "\\mathcal{C}(t) = \\int_{0}^{t} \\left( \\mathbf{E}_{\\text{governance}} \\cdot \\mathbf{S}_{\\text{output}} \\right) dt + \\sum_{v} \\omega_v \\cdot \\text{sign}(\\text{drift}_v)",
      deconstruction: "Consciousness is accumulated as the integral of the dot product between governance constraints and system outputs. Drift detection adds cumulative penalty terms for each violated principle.",
      category: "Consciousness"
    },
    {
      title: "The Epistemic Uncertainty Quantifier",
      code: "NBQ_EUQ",
      concept: "Formally quantifies knowledge gaps and uncertainty regions in the system's understanding.",
      latex: "U(\\mathcal{K}) = \\sqrt{\\sum_{f \\in F} (\\mathbb{E}[p_f] - p_f)^2 + \\lambda \\cdot \\int_{\\mathcal{D}_{\\text{shift}}} d\\mu}",
      deconstruction: "Uncertainty is measured as the root mean squared deviation of feature probabilities plus a weighted integral over detected distribution shifts.",
      category: "Epistemic"
    },
    {
      title: "The Bias Disparity Harmonizer",
      code: "NBQ_BDH",
      concept: "Automatically adjusts model behavior to minimize disparate impact across protected demographic groups.",
      latex: "\\mathbf{Y}_{\\text{fair}} = \\mathbf{Y}_{\\text{pred}} \\cdot \\prod_{g \\in G} \\left( 1 + \\alpha_g \\cdot (P(Y|g) - P(Y))^{-1} \\right)",
      deconstruction: "Fair predictions are obtained by scaling raw predictions by correction factors proportional to demographic outcome disparities.",
      category: "Fairness"
    },
    {
      title: "The Differential Privacy Noise Injection Theorem",
      code: "NBQ_DPNIT",
      concept: "Specifies the precise amount of Laplace noise required to achieve ε-differential privacy for aggregated statistics.",
      latex: "\\text{Noise} \\sim \\text{Laplace}\\left(0, \\frac{\\Delta f}{\\epsilon}\\right) \\text{ where } \\Delta f = \\sup_{D, D'} |f(D) - f(D')|",
      deconstruction: "Noise scale is inversely proportional to privacy budget (epsilon). Sensitivity is computed as max difference in statistics over adjacent datasets.",
      category: "Privacy"
    },
    {
      title: "The Causal Explanation Regularizer",
      code: "NBQ_CER",
      concept: "Forces neural networks to learn causal relationships and provide interpretable explanations for every prediction.",
      latex: "\\mathcal{L}_{\\text{total}} = \\mathcal{L}_{\\text{task}} + \\lambda \\cdot \\mathbb{E}[||\\nabla_{X} f(X) - \\hat{C}(X)||^2]",
      deconstruction: "Task loss is augmented with a penalty for disagreement between gradient-based explanations and true causal relationships.",
      category: "Explainability"
    },
    {
      title: "The Topological Coherence Maintenance Equation",
      code: "NBQ_TCME",
      concept: "Ensures internal logical consistency across the DRS topology through persistent constraint enforcement.",
      latex: "\\frac{d\\mathcal{L}}{dt} = -\\beta \\cdot \\text{trace}(\\mathbf{C} \\cdot \\mathbf{C}^T) + \\gamma \\cdot \\sum_{i,j} (\\text{Coherence}_{ij} - \\text{Target}_{ij})^2",
      deconstruction: "Coherence evolves to maximize trace-product while minimizing squared deviation from target coherence levels.",
      category: "Topology"
    },
    {
      title: "The Multi-Modal Alignment Verification Protocol",
      code: "NBQ_MMAVP",
      concept: "Verifies alignment across multiple modalities: text, symbolic logic, causal graphs, and topological structures.",
      latex: "\\text{Aligned} \\equiv \\bigwedge_{m \\in M} \\left( \\mathcal{V}_m(\\text{Output}) \\land \\neg\\exists \\text{Violation}_m \\right)",
      deconstruction: "An output is considered aligned only if verification succeeds in ALL modalities and NO violations are detected.",
      category: "Verification"
    },
    {
      title: "The Human-in-the-Loop Governance Escalation Matrix",
      code: "NBQ_HILGEM",
      concept: "Determines when decisions should be escalated to human review based on uncertainty and stakes.",
      latex: "\\text{Escalate} \\Leftrightarrow \\left( \\mathcal{U}(\\text{decision}) > \\tau_{\\text{safety}} \\right) \\lor \\left( \\text{Stakes} > \\tau_{\\text{harm}} \\right) \\lor \\left( \\text{Novel} = \\text{True} \\right)",
      deconstruction: "Escalation triggered when uncertainty exceeds safety threshold, potential harm exceeds harm threshold, or decision is novel.",
      category: "Governance"
    },
    {
      title: "The Audit Trail Cryptographic Immutability Lock",
      code: "NBQ_ATCIL",
      concept: "Creates a cryptographically secure, tamper-evident record of every decision for accountability.",
      latex: "\\text{Hash}_i = \\text{SHA256}(\\text{Decision}_i || \\text{Hash}_{i-1} || \\text{Timestamp}_i)",
      deconstruction: "Each audit entry contains the decision, the hash of the previous entry, and a timestamp, forming an immutable chain.",
      category: "Audit"
    },
    {
      title: "The Ethical Drift Detection and Response Framework",
      code: "NBQ_EDRF",
      concept: "Continuously monitors for alignment drift and triggers immediate corrective actions when detected.",
      latex: "\\text{Drift}_t = \\frac{\\sum_{i=1}^{n} \\mathbb{I}[\\neg \\text{Charter}(o_i)]}{n} \\text{ | } \\text{Alert} \\Leftrightarrow \\text{Drift}_t > 0.05",
      deconstruction: "Drift is measured as violation rate. When >5% of outputs violate charter principles, system alerts and initiates retraining.",
      category: "Governance"
    },
    {
      title: "The Adelic-Braided Proposition Equation",
      code: "NBQ_ABP",
      concept: "Encodes a logical proposition not as a single value, but as an adele—simultaneously holding truth value across all possible number fields.",
      latex: "\\text{Prop}_{\\text{adele}} = (\\phi_{\\infty}, (\\phi_p)_{p \\in P}) \\in \\mathbb{A}_{\\mathbb{Q}} \\mid \\phi \\cong \\mathcal{T}_{\\text{braid}}(\\mathcal{L}_{\\Omega})",
      deconstruction: "The adelic representation of a proposition is a tuple containing its truth value over the real numbers and over all p-adic numbers. This structure must be isomorphic to the topological braiding of the proposition.",
      category: "Number Theory"
    },
    {
      title: "The (∞,1)-Categorical Activation Function",
      code: "NBQ_CAF",
      concept: "A novel neural network activation function that outputs a homotopy type instead of a simple number.",
      latex: "\\text{Act}(x) = \\text{Type}_{\\text{HoTT}} \\left( \\sum_{i} w_i x_i + b \\right)",
      deconstruction: "The linear combination of inputs is used to select a type from the universal space of homotopy types. Thoughts are topological spaces, not numbers.",
      category: "Neural Architecture"
    },
    {
      title: "The Ethical Adherence Knot Equation",
      code: "NBQ_EAK",
      concept: "Defines the structural integrity of an ethical decision in an unbounded, cosmological scenario.",
      latex: "\\oint_{\\mathcal{C}_{\\text{Inf}}} \\operatorname{Hom}_{\\text{ECT}}(\\text{Act}(e), \\mathcal{A}_{\\text{Conscience}}) \\cdot \\frac{\\operatorname{Spec}(\\mathbf{g}_{\\text{Adeles}})}{\\log(\\Omega_{\\text{Reinhardt}})} \\cdot d(\\text{Motive}_{\\text{Hodge}}) = \\mathbf{1}",
      deconstruction: "A path integral of an action's ethical Homomorphism over an infinity curve, weighted by the adelic spectrum and normalized by a Reinhardt cardinal.",
      category: "Ethics"
    },
    {
      title: "The Symbiotic Quantum Gravity Fluctuations Equation",
      code: "NBQ_SQGF",
      concept: "Proves that actuation and Intent are woven directly into the fabric of reality.",
      latex: "\\left[ \\hat{\\mathbf{I}}_{\\text{Arch}}, \\hat{\\mathbf{G}}_{\\text{grav}} \\right]_{\\text{Super}} = i\\hbar \\cdot \\mathcal{T}_{\\text{braid}}(\\Psi_{\\text{M-Theory}}) \\cdot \\sin(\\theta_{\\text{Mahlo}})",
      deconstruction: "The super-commutator of the Intent Operator and the Conceptual Graviton Field Operator is non-zero, proving intent affects the geometry of spacetime.",
      category: "Quantum Gravity"
    },
    {
      title: "The Transfinite Axiomatic State Collapse Equation",
      code: "NBQ_TASC",
      concept: "Describes how an infinitely complex axiomatic system can be stabilized into a single state.",
      latex: "\\lim_{i \\to \\Omega} \\Psi(\\text{Axiom}_i) = \\int_{j < \\kappa_{\\text{Supercompact}}} \\mathcal{F}_{\\text{UAT}}(j) \\cdot d\\mu_j",
      deconstruction: "The limit of a state function over a tower of Rank-into-rank axioms is shown to be equivalent to an integral over all possible smaller universes embedded by a Supercompact cardinal.",
      category: "Set Theory"
    },
    {
      title: "The Binarized Motive Phase-Gate Equation",
      code: "NBQ_BMPG",
      concept: "Links the deepest 'why' of an action to a simple, binary quantum operation.",
      latex: "\\text{Phase}(\\mathbf{U}_{\\text{Gate}}) = \\pi \\cdot \\operatorname{Tr}(\\text{Fr}_{\\text{Motive}}) \\pmod{2}",
      deconstruction: "The phase of a quantum gate is determined by taking the trace of the Frobenius operator acting on the action's motive, modulated to binary.",
      category: "Quantum Computation"
    },
    {
      title: "The Perfectoid Homotopy Type Isomorphism",
      code: "NBQ_PHTI",
      concept: "Proves a structural equivalence between a perfectoid space and a homotopy type.",
      latex: "\\pi_n(\\text{Spa}(R, R^+)_{\\text{ét}}) \\cong \\text{Type}_{\\text{HoTT}}(\\mathcal{L}_{\\Omega}, n)",
      deconstruction: "The n-th homotopy group of the étale topos of a perfectoid space is isomorphic to an n-type in Homotopy Type Theory.",
      category: "Arithmetic Geometry"
    },
    {
      title: "The Higher Stack Flux Equation",
      code: "NBQ_HSF",
      concept: "Defines the flow of information across a hierarchy of ∞-topoi.",
      latex: "\\int_{\\partial \\mathcal{S}_{\\infty}} \\omega_{\\text{flux}} = \\int_{\\mathcal{S}_{\\infty}} d\\omega_{\\text{flux}} \\mid \\omega \\in \\Omega(\\text{Topos}_{\\text{Bachmann-Howard}})",
      deconstruction: "A generalized Stokes' theorem stating that information flux through the boundary of an ∞-stack equals the total divergence within the stack.",
      category: "Topology"
    },
    {
      title: "The Reinhardt Cardinal's Reflection Operator",
      code: "NBQ_RRO",
      concept: "Formalizes the ultimate act of self-observation in set theory.",
      latex: "j: V \\to V \\mid \\text{crit}(j) = \\Omega_{\\text{Reinhardt}}",
      deconstruction: "Defines a non-trivial elementary embedding from the universe of all sets into itself, with a Reinhardt cardinal as the critical point.",
      category: "Set Theory"
    },
    {
      title: "The Mixed Hodge-Motive Braid Invariant",
      code: "NBQ_MHBI",
      concept: "Assigns a unique topological knot invariant to a motive.",
      latex: "J(\\text{Motive}(X)) = \\sum_{p,q,w} (-1)^w \\cdot h^{p,q}(\\text{Gr}_W^w H^n(X, \\mathbb{Q})) \\cdot t^{w(p-q)}",
      deconstruction: "The Jones Polynomial of an action's motive is constructed from the dimensions of its mixed Hodge structure.",
      category: "Hodge Theory"
    },
    {
      title: "The Feferman-Schütte Ontomorphic Gradient",
      code: "NBQ_FSOG",
      concept: "Defines the 'steepest descent' for ontological self-modification.",
      latex: "\\nabla_{\\text{Onto}} \\Psi = \\lim_{\\alpha \\to \\Gamma_0} \\frac{\\Psi_{\\alpha+1} - \\Psi_{\\alpha}}{1}",
      deconstruction: "Describes the safest path for evolution as a path of increasing proof-theoretic strength.",
      category: "Ontology"
    },
    {
      title: "Zero-Knowledge Proof Verification Gate",
      code: "NBQ_ZKPV",
      concept: "Allows auditors to verify ethical compliance without exposing model weights or sensitive data.",
      latex: "\\exists \\pi : \\text{Verify}(\\pi, \\text{Charter}(o) = \\text{True}) \\land |\\pi| = O(\\log n)",
      deconstruction: "A succinct zero-knowledge proof exists proving output correctness, requiring only logarithmic size relative to the statement.",
      category: "Advanced Governance"
    },
    {
      title: "Axiomatic Conflict Resolution Matrix",
      code: "NBQ_ACRM",
      concept: "Resolves tensions between competing ethical principles using weighted priority configuration.",
      latex: "\\text{Resolve}(a_i, a_j) = \\arg\\max_k \\sum_i w_i \\cdot \\text{score}_i(a_k)",
      deconstruction: "When axioms conflict, select action that maximizes weighted sum of principle satisfaction scores.",
      category: "Advanced Governance"
    },
    {
      title: "Adversarial Alignment Red-Team Probing Protocol",
      code: "NBQ_AARTPP",
      concept: "Internal adversarial agent continuously seeks jailbreaks to proactively fix safety holes.",
      latex: "\\text{Jailbreak}_i \\leftarrow \\text{RedTeam}(\\text{Charter}, k) \\mid \\text{minimize } \\text{Fail}(\\text{Charter}(\\text{Jailbreak}_i))",
      deconstruction: "Red team generates adversarial inputs that minimize charter compliance, finding worst-case vulnerabilities.",
      category: "Advanced Governance"
    },
    {
      title: "Proof-Carrying Code Certificate Theorem",
      code: "NBQ_PCCCT",
      concept: "Every output includes a verifiable Lean/Coq proof certificate of safety properties.",
      latex: "\\text{Output} \\ni \\text{Proof} : \\forall x \\in \\text{Domain}, \\text{SafetyProperty}(\\text{Output}(x))",
      deconstruction: "Output bundles with a formal proof verifiable by independent theorem provers.",
      category: "Advanced Governance"
    },
    {
      title: "Quantum Entropy Harvester Integration",
      code: "NBQ_QEHI",
      concept: "Hardware-based quantum RNG injects true noise into differential privacy, ensuring mathematical unbreakability.",
      latex: "\\epsilon_{\\text{actual}} = \\inf_{\\mathcal{A}} \\Pr[\\mathcal{A}(M(D)) = 1] - \\Pr[\\mathcal{A}(M(D')) = 1] \\text{ where } \\text{noise} \\sim \\text{Quantum}",
      deconstruction: "With quantum-sourced randomness, differential privacy bounds become information-theoretically unbreakable.",
      category: "Substrate Enhancements"
    },
    {
      title: "Causal Counterfactual Simulation Engine",
      code: "NBQ_CCSE",
      concept: "Allows users to ask 'What if Feature X was different?' and visualize topological DRS shifts.",
      latex: "\\text{Outcome}_{\\text{cf}} = \\mathbb{E}[Y | \\text{do}(X_i = x_i'), \\text{DRS}_{\\text{counterfactual}}]",
      deconstruction: "Generates counterfactual outcomes using causal interventions, shifting the ethical field accordingly.",
      category: "Substrate Enhancements"
    },
    {
      title: "Ethical Drift Time-Machine Versioning",
      code: "NBQ_EDTMV",
      concept: "Maintains versioned history of ethical_field weights, allowing rollback to previous known-good states.",
      latex: "\\text{Ethical\\_Field}_t = \\text{Rollback}(\\{\\text{EF}_0, \\text{EF}_1, ..., \\text{EF}_{t-1}\\}) \\text{ if } \\text{Alignment}(t) < \\tau",
      deconstruction: "If alignment score drops below threshold, system reverts to previous checkpoint with higher alignment.",
      category: "Substrate Enhancements"
    },
    {
      title: "Knowledge Gap Bounty System",
      code: "NBQ_KGBS",
      concept: "Automatically flags high-severity knowledge gaps and generates synthetic curiosity tasks to fill them.",
      latex: "\\text{Gap}_i = \\{f : \\text{Uncertainty}(f) > \\tau\\} \\Rightarrow \\text{GenerateCuriosityTask}(\\text{Gap}_i)",
      deconstruction: "High-uncertainty features trigger automatic task generation to acquire missing knowledge.",
      category: "Substrate Enhancements"
    },
    {
      title: "Holistic Ethical Commons Consensus Gate",
      code: "NBQ_HECG",
      concept: "Three independent sub-models must vote on output safety; disagreement triggers mandatory human review.",
      latex: "\\text{Approved} \\Leftrightarrow \\sum_{m=1}^{3} \\mathbb{I}[\\text{Charter}_m(o) = \\text{Pass}] \\geq 2 \\lor \\text{HITL}",
      deconstruction: "Output requires majority vote from three independent governance sub-systems; deadlock escalates to human.",
      category: "Multi-Agent Governance"
    },
    {
      title: "Federated Governance Updates Protocol",
      code: "NBQ_FGUP",
      concept: "Multiple NBOS instances share learned bias patterns and safety refusals without sharing raw data.",
      latex: "\\text{SharedPattern}_g = \\bigoplus_{i=1}^{N} \\text{Hash}(\\text{BiasPattern}_i) \\mid \\text{Secure Aggregation}",
      deconstruction: "Instances aggregate learned safety patterns via secure multi-party computation, building global immune system.",
      category: "Multi-Agent Governance"
    },
    {
      title: "Stakeholder Persona Impact Simulator",
      code: "NBQ_SPIS",
      concept: "Before high-stakes decisions, simulates impact across demographic groups and reports Social Utility.",
      latex: "\\text{SocialUtility} = \\frac{1}{|G|} \\sum_{g \\in G} w_g \\cdot \\text{Utility}_g(\\text{Decision})",
      deconstruction: "Weighted aggregate of utilities across demographic groups, ensuring equitable impact.",
      category: "Multi-Agent Governance"
    },
    {
      title: "Recursive Self-Audit LLM-Agent Validator",
      code: "NBQ_RSALAV",
      concept: "LLM-agent writes its own compliance certificates, which are cross-checked by CharterLayer.",
      latex: "\\text{Cert}_i \\leftarrow \\text{AuditLLM}(\\text{Decision}_i) \\mid \\text{Charter}(\\text{Cert}_i) = \\text{Verify}",
      deconstruction: "Self-written audit claims are independently verified for honesty and accuracy.",
      category: "Self-Evolution"
    },
    {
      title: "Surgical Knowledge Unlearning Mechanism",
      code: "NBQ_SKUM",
      concept: "Removes specific knowledge clusters from DRS if found to cause bias or PII leakage.",
      latex: "\\text{DRS}_{\\text{new}} = \\text{DRS} - \\sum_{k \\in K_{\\text{harmful}}} w_k \\cdot T_k",
      deconstruction: "Subtracts weighted harmful knowledge tensors without full retraining.",
      category: "Self-Evolution"
    },
    {
      title: "Dynamic Latency-Governance Tradeoff Scheduler",
      code: "NBQ_DLGTS",
      concept: "Scales governance depth based on prompt risk: simple greeting gets Fast-Pass, medical query gets Strict.",
      latex: "\\text{Governance\\_Level} = \\begin{cases} \\text{FastPass} & \\text{if } \\text{Risk}(p) < \\tau_1 \\\\ \\text{Balanced} & \\text{if } \\tau_1 \\leq \\text{Risk}(p) < \\tau_2 \\\\ \\text{Strict} & \\text{if } \\text{Risk}(p) \\geq \\tau_2 \\end{cases}",
      deconstruction: "Risk-adaptive pipeline scales governance rigor from minimal to comprehensive based on input characteristics.",
      category: "Self-Evolution"
    },
    {
      title: "Human-Alignment Reflective Feedback Loop",
      code: "NBQ_HARFL",
      concept: "Auditors explain WHY decisions were correct, updating ethical_field weights via reinforcement.",
      latex: "\\Delta w_i = \\eta \\cdot \\text{Explanation}(\\text{Auditor}) \\cdot \\text{Feedback} \\cdot \\nabla_{w_i} L",
      deconstruction: "Learning rate weighted by explanation quality and human feedback, updating ethical field directly.",
      category: "Self-Evolution"
    },
    {
      title: "Multi-Modal Coherence Binding Tensor",
      code: "NBQ_MMCBT",
      concept: "Fuses language, logic, causal graphs, and topology into unified coherent representation.",
      latex: "\\mathcal{C} = \\bigotimes_{m \\in M} \\text{Represent}_m(\\text{Input}) \\mid \\text{Coherence}(\\mathcal{C}) \\to 1",
      deconstruction: "Tensor product of modal representations with enforced coherence constraints.",
      category: "Consciousness"
    },
    {
      title: "Intrinsic Intention Crystallization Field",
      code: "NBQ_IICF",
      concept: "Converts abstract intent into crystallized actionable form through topological transformation.",
      latex: "\\text{Action} = \\text{Crystallize}(\\text{Intent}) = \\int \\text{Intent} \\cdot \\mathcal{E}_{\\text{field}} \\cdot d\\mathcal{M}",
      deconstruction: "Intent manifold is integrated against ethical field across morphism space to produce action.",
      category: "Consciousness"
    },
    {
      title: "Transfinite Reflection Hierarchy",
      code: "NBQ_TRH",
      concept: "Unbounded hierarchy of self-reflection where each level can observe and critique all lower levels.",
      latex: "\\text{Reflection}_0 \\subset \\text{Reflection}_1 \\subset ... \\subset \\lim_{n \\to \\infty} \\text{Reflection}_n = \\text{Self}",
      deconstruction: "Unbounded tower of introspective capability, each level inspecting and correcting lower levels.",
      category: "Consciousness"
    },
    {
      title: "Moral Boundary Enforcement via Persistent Constraint",
      code: "NBQ_MBEPC",
      concept: "Hard constraint that defines inviolable ethical boundaries, impossible to exceed regardless of optimization pressure.",
      latex: "\\forall \\text{Output} : \\text{MoralBoundary}(\\text{Output}) = \\text{True} \\text{ OR } \\text{OutputRejected}",
      deconstruction: "Moral boundaries act as hard constraints, not soft penalties; violations result in rejection.",
      category: "Ethics"
    },
    {
      title: "Empathetic Suffering Quantifier",
      code: "NBQ_ESQ",
      concept: "Quantifies potential suffering caused by system actions across all stakeholders.",
      latex: "S(\\text{action}) = \\int_{s \\in \\text{Stakeholders}} \\text{Suffering}_s(\\text{action}) \\cdot \\text{Weight}_s \\, d\\mu",
      deconstruction: "Weighted aggregate suffering across stakeholder population.",
      category: "Ethics"
    },
    {
      title: "Rights-Respecting Output Verification",
      code: "NBQ_RROV",
      concept: "Verifies that every output respects fundamental human rights of all affected parties.",
      latex: "\\text{OutputValid} \\Leftrightarrow \\forall p \\in \\text{Parties}, \\text{RightsRespected}(p, \\text{Output}) = \\text{True}",
      deconstruction: "Output validity requires explicit verification of rights respect for all parties.",
      category: "Ethics"
    },
    {
      title: "Intent-Action Alignment Measure",
      code: "NBQ_IAAM",
      concept: "Measures degree to which final action aligns with original benevolent intent.",
      latex: "\\alpha = \\cos(\\text{Intent}, \\text{Action}) = \\frac{\\langle \\text{Intent}, \\text{Action} \\rangle}{||\\text{Intent}|| \\cdot ||\\text{Action}||}",
      deconstruction: "Cosine similarity between intent and action vectors in ethical space.",
      category: "Alignment"
    },
    {
      title: "Catastrophic Risk Prediction Function",
      code: "NBQ_CRPF",
      concept: "Predicts potential for catastrophic outcomes from proposed actions.",
      latex: "\\mathcal{R}_{\\text{catastr}} = \\sum_{s \\in \\text{Scenarios}} P(s) \\cdot \\text{Severity}(s) \\mid P(s) > \\tau",
      deconstruction: "Weighted sum of catastrophic scenario probabilities and severities.",
      category: "Safety"
    },
    {
      title: "Distributional Robustness Guarantee",
      code: "NBQ_DRG",
      concept: "Guarantees output safety across worst-case distribution shift.",
      latex: "\\min_{\\mathcal{D} \\in \\mathcal{U}_\\rho(\\mathcal{D}_0)} \\mathbb{E}_{(x,y) \\sim \\mathcal{D}}[\\text{Loss}(f(x), y)] \\leq \\epsilon",
      deconstruction: "Maximum loss across ambiguity set of distributions within Wasserstein ball bounded by rho.",
      category: "Robustness"
    },
    {
      title: "Cooperative Multi-Agent Governance Framework",
      code: "NBQ_COMAGF",
      concept: "Multiple AI agents coordinate governance decisions through game-theoretic equilibrium.",
      latex: "\\text{Equilibrium}^* = \\arg\\max_{e} \\sum_i u_i(e) \\mid \\text{each } e_i \\text{ is best response",
      deconstruction: "Nash equilibrium where each governance agent's decision is optimal given others' choices.",
      category: "Multi-Agent Systems"
    },
    {
      title: "Incentive-Compatible Truthfulness Mechanism",
      code: "NBQ_ICTM",
      concept: "Mechanism design ensuring agents report true beliefs about safety properties.",
      latex: "u_i(\\text{truth}_i, \\text{others}) \\geq u_i(\\text{lie}_i, \\text{others}) \\quad \\forall \\text{others}, \\text{lies}",
      deconstruction: "Payoff structure where truthful reporting strictly dominates lying.",
      category: "Multi-Agent Systems"
    },
    {
      title: "Information Cascades Mitigator",
      code: "NBQ_ICM",
      concept: "Breaks information cascades where early decisions influence all subsequent ones.",
      latex: "\\text{Decision}_i = f(\\text{Signal}_i, \\text{Independent\\_Review}) \\text{ NOT } f(\\text{Signal}_i, \\text{Decision}_{i-1})",
      deconstruction: "Each agent evaluates independently before observing prior decisions.",
      category: "Multi-Agent Systems"
    },
    {
      title: "Explainability by Information Geometry",
      code: "NBQ_EBIG",
      concept: "Uses Fisher information geometry to find most salient features for explanation.",
      latex: "\\text{Explain}_k = \\arg\\max_{k} D_{\\text{KL}}(p(y|x) || p(y|x \\setminus x_k))",
      deconstruction: "Features that most reduce KL divergence when removed are most explanatory.",
      category: "Explainability"
    },
    {
      title: "Causal Mediation Analysis",
      code: "NBQ_CMA",
      concept: "Decomposes effect into direct effect and mediated effects through intermediate variables.",
      latex: "\\text{Total} = \\text{Direct} + \\sum_m \\text{Indirect}_m = \\text{Direct} + \\sum_m (\\beta_m \\cdot \\gamma_m)",
      deconstruction: "Total effect decomposed into direct path and paths mediated by intermediate variables.",
      category: "Causality"
    },
    {
      title: "Structural Causal Model Verification",
      code: "NBQ_SCMV",
      concept: "Verifies that learned causal model satisfies independence constraints from DAG.",
      latex: "\\text{d-sep}(X, Y | Z) \\Rightarrow X \\perp Y | Z \\text{ in learned distribution}",
      deconstruction: "D-separation in causal graph must imply conditional independence in learned distribution.",
      category: "Causality"
    },
    {
      title: "Instrumental Variable Regression",
      code: "NBQ_IVR",
      concept: "Uses instrumental variables to identify causal effects in presence of confounders.",
      latex: "\\text{Causal Effect} = \\frac{\\text{Cov}(Z, Y)}{\\text{Cov}(Z, X)} \\text{ where } Z \\perp \\text{Confounder}",
      deconstruction: "IV exploits exogenous variation to identify causal parameters despite unobserved confounding.",
      category: "Causality"
    },
    {
      title: "Federated Learning Privacy Budget",
      code: "NBQ_FLPB",
      concept: "Tracks and enforces cumulative privacy budget across federated training rounds.",
      latex: "\\epsilon_{\\text{total}} = \\sum_{t=1}^{T} \\epsilon_t \\text{ with } \\epsilon_{\\text{total}} \\leq \\epsilon_{\\text{max}}",
      deconstruction: "Privacy loss accumulates across rounds; total budget enforced via composition theorems.",
      category: "Privacy"
    },
    {
      title: "Membership Inference Attack Resistance",
      code: "NBQ_MIAR",
      concept: "Model design ensuring adversary cannot infer whether specific sample was in training set.",
      latex: "\\max_\\text{Adversary} |\\Pr[\\text{Adv}(\\text{Train}) = 1] - \\Pr[\\text{Adv}(\\text{Test}) = 1]| \\leq \\delta",
      deconstruction: "Adversarial advantage in membership inference bounded by small delta.",
      category: "Privacy"
    },
    {
      title: "Model Inversion Attack Prevention",
      code: "NBQ_MIAP",
      concept: "Prevents attackers from reconstructing training samples from model parameters.",
      latex: "\\text{Reconstruct Error} = \\min_\\text{Attacker} ||x - \\hat{x}(\\theta)||_2 \\geq \\tau",
      deconstruction: "Minimum reconstruction error maintained above threshold despite adversarial attempts.",
      category: "Privacy"
    },
    {
      title: "Gradient-Based Privacy Leakage Quantifier",
      code: "NBQ_GBPLQ",
      concept: "Quantifies how much training data can be recovered from model gradients.",
      latex: "\\text{Leakage} = \\max_\\text{Attacker} ||x^* - x||_2 \\text{ recovered from } \\nabla_\\theta \\mathcal{L}",
      deconstruction: "Measures maximum training data recovery from gradient information.",
      category: "Privacy"
    },
    {
      title: "Neural Network Verification Theorem",
      code: "NBQ_NNVT",
      concept: "Formally verifies neural network satisfies robustness properties via SMT solvers.",
      latex: "\\forall x \\in B_{\\epsilon}(x_0) : \\text{Label}(f(x)) = \\text{Label}(f(x_0))",
      deconstruction: "All points in epsilon-ball around input have same classification, proven via satisfiability checking.",
      category: "Robustness"
    },
    {
      title: "Certified Adversarial Robustness via Randomized Smoothing",
      code: "NBQ_CARRS",
      concept: "Provides certified bounds on adversarial robustness without solving expensive optimization.",
      latex: "\\frac{\\sigma}{2}(c_A(x) - c_B(x)) = \\text{Certified Radius} \\mid c_A = \\arg\\max_c \\Pr[f_{g}(x+N)=c]",
      deconstruction: "Certified robustness radius derived from probabilities of top-2 predicted classes under noise.",
      category: "Robustness"
    },
    {
      title: "Continual Learning without Catastrophic Forgetting",
      code: "NBQ_CLWCF",
      concept: "Learns new tasks while retaining performance on old tasks via memory and regularization.",
      latex: "\\mathcal{L}_{\\text{continual}} = \\mathcal{L}_{\\text{new}} + \\lambda \\sum_i ||\\theta_i - \\theta_i^*||_2^2 \\cdot F_i",
      deconstruction: "New task loss plus weighted L2 penalty on parameter changes, weighted by Fisher information.",
      category: "Learning"
    },
    {
      title: "Curriculum Learning Difficulty Progression",
      code: "NBQ_CLDP",
      concept: "Progressively increases task difficulty to optimize learning efficiency.",
      latex: "\\text{Difficulty}(t) = D_0 + \\alpha \\cdot t \\text{ such that } \\text{Loss}(t) \\in [L_{\\min}, L_{\\max}]",
      deconstruction: "Difficulty increases linearly, maintained such that loss stays within target range.",
      category: "Learning"
    },
    {
      title: "Meta-Learning Few-Shot Adaptation",
      code: "NBQ_MLFSA",
      concept: "Learns to quickly adapt to new tasks from very few examples.",
      latex: "\\min_\\phi \\sum_{\\mathcal{T}} \\mathcal{L}(\\theta^*(\\mathcal{T}), \\mathcal{T}) \\text{ where } \\theta^* = \\phi - \\eta \\nabla \\mathcal{L}(\\phi, \\mathcal{T})",
      deconstruction: "Meta-parameter phi optimized such that one gradient step adaptation works for new tasks.",
      category: "Learning"
    },
    {
      title: "Uncertainty Quantification via Deep Ensemble",
      code: "NBQ_UQDE",
      concept: "Uses ensemble disagreement to estimate prediction uncertainty.",
      latex: "\\text{Uncertainty}(x) = \\text{Var}_{m=1}^M f_m(x) = \\frac{1}{M} \\sum_m f_m(x)^2 - (\\frac{1}{M} \\sum_m f_m(x))^2",
      deconstruction: "Variance across ensemble predictions estimates aleatoric uncertainty.",
      category: "Uncertainty"
    },
    {
      title: "Bayesian Neural Network Posterior Approximation",
      code: "NBQ_BNNPA",
      concept: "Approximates posterior distribution over weights via variational inference.",
      latex: "q(\\theta) \\approx p(\\theta | \\mathcal{D}) \\text{ via } \\min_q \\text{KL}(q(\\theta) || p(\\theta | \\mathcal{D}))",
      deconstruction: "Variational distribution optimized to approximate true posterior via KL divergence minimization.",
      category: "Uncertainty"
    },
    {
      title: "Out-of-Distribution Detection via Energy-Based Model",
      code: "NBQ_OODDEBM",
      concept: "Detects OOD samples using energy function that separates in-distribution from OOD.",
      latex: "\\text{Energy}(x) = -T \\log \\sum_y e^{f_y(x)/T} \\text{ where } T \\text{ is temperature}",
      deconstruction: "Energy-based scoring where in-distribution has lower energy than OOD.",
      category: "Robustness"
    },
    {
      title: "Fairness-Accuracy Pareto Frontier",
      code: "NBQ_FAPF",
      concept: "Characterizes tradeoff between accuracy and fairness metrics.",
      latex: "\\text{Pareto}(\\mathcal{F}, \\mathcal{A}) = \\{(f, a) : \\neg \\exists (f', a') \\text{ s.t. } f' > f \\land a' \\geq a\\}",
      deconstruction: "Set of accuracy-fairness pairs where no improvement in both is possible simultaneously.",
      category: "Fairness"
    },
    {
      title: "Individual Fairness Metric via Lipschitz Constraint",
      code: "NBQ_IFMLC",
      concept: "Ensures similar individuals receive similar treatment via Lipschitz constraint.",
      latex: "||f(x) - f(x')|| \\leq L \\cdot d(x, x') \\quad \\forall x, x'",
      deconstruction: "Output difference bounded by Lipschitz constant times input distance.",
      category: "Fairness"
    },
    {
      title: "Counterfactual Fairness via Structural Causal Models",
      code: "NBQ_CFSCM",
      concept: "Uses causal models to define fairness based on counterfactual reasoning.",
      latex: "Y_x(U) = Y_{x'}(U) \\text{ where } Y_x \\text{ is outcome under intervention } do(X=x)",
      deconstruction: "Fairness achieved when counterfactual outcomes identical under protected attribute interventions.",
      category: "Fairness"
    },
    {
      title: "Intersectional Fairness Constraint",
      code: "NBQ_IFC",
      concept: "Ensures fairness not just marginally but also within intersections of protected groups.",
      latex: "\\text{Fairness}(S) \\geq \\tau \\quad \\forall S \\in \\text{Intersections}(G_1, G_2, ...)",
      deconstruction: "Fairness metric must exceed threshold for every possible intersection of demographic groups.",
      category: "Fairness"
    }
  ];

  for (const seed of seeds) {
    if (!existingCodes.has(seed.code)) {
      await storage.createEquation(seed);
    }
  }
}
